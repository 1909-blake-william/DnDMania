import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Subscription } from 'rxjs';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.css']
})
export class EventsContainerComponent implements OnInit, OnDestroy {

  test = false;
  testSubscription: Subscription;

  inputState = '';
  inputPhase = '';

  stateSubscription: Subscription;
  state = '';

  constructor(private eventService: EventService, private testService: TestService) { }

  ngOnInit() {
    this.stateSubscription = this.eventService.state$.subscribe(state => {
      this.state = state;
    });
    this.testSubscription = this.testService.test$.subscribe(test => {
      this.test = test;
    });
  }

  ngOnDestroy() {
    if (this.stateSubscription !== undefined) {
      this.stateSubscription.unsubscribe();
    }
  }

  enterState() {
    this.eventService.setState(this.inputState);
  }

  enterPhase() {
    this.eventService.setPhase(this.inputPhase);
  }
}
