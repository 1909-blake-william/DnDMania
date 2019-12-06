import { Component, OnInit, OnDestroy } from '@angular/core';
import { swish, swash, stash, ash, sew, sin, take, king } from './fade';
import { EventService } from 'src/app/events/services/event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  animations: [swish, swash, stash, ash, sew, sin, take, king]
})
export class ViewComponent implements OnInit, OnDestroy {

  text: string;
  timerSub: Subscription;
  currentState = 'initial';
  nextState = 'first';
  nextNode = 'alpha';
  nextMoon = 'ashen';
  nextHunt = 'night';
  nextOfKin = 'light';
  nextSide = 'left';
  nextRule = 'end';

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';

  }

  changeStateTwo() {
    this.nextState = this.nextState === 'first' ? 'last' : 'first';

  }

  changeStateThree() {
    this.nextNode = this.nextNode === 'alpha' ? 'omega' : 'alpha';
  }

  changeStateFour() {
    this.nextMoon = this.nextMoon === 'ashen' ? 'one' : 'ashen';
  }

  changeStateFive() {
    this.nextHunt = this.nextHunt === 'night' ? 'hunt' : 'night';
  }

  changeStateSix() {
    this.nextOfKin = this.nextOfKin === 'light' ? 'dark' : 'light';
  }

  changeStateSeven() {
    this.nextSide = this.nextSide === 'left' ? 'right' : 'left';
  }

  changeStateEight() {
    this.nextRule = this.nextRule === 'end' ? 'time' : 'end';
  }

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.timerSub = this.eventService.timer$.subscribe(timer => {
      this.text = timer.toString();
    });
  }

  ngOnDestroy() {
    if (this.timerSub !== undefined) {
      this.timerSub.unsubscribe();
    }
  }
}
