import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.css']
})
export class EventsContainerComponent implements OnInit {

  inputState = '';
  inputPhase = '';

  stateSubscription: Subscription;
  state = '';

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.stateSubscription = this.eventService.state$.subscribe(state => {
      this.state = state;
    });
  }

  enterState() {
    this.eventService.setState(this.inputState);
  }

  enterPhase() {
    this.eventService.setPhase(this.inputPhase);
  }
}
