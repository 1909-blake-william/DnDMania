import { Component, OnInit, OnDestroy } from '@angular/core';
import { swish, swash, stash, ash, sew, sin, take, king } from './fade';
import { EventService } from 'src/app/events/services/event.service';
import { Subscription } from 'rxjs';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  animations: [swish, swash, stash, ash, sew, sin, take, king]
})
export class ViewComponent implements OnInit, OnDestroy {

  text: string;
  timerSub: Subscription;

  test: boolean;
  testSub: Subscription;

  state: string;
  stateSub: Subscription;


  currentState = 'initial';
  nextState = 'first';
  nextNode = 'alpha';
  nextMoon = 'ashen';
  nextHunt = 'night';
  nextOfKin = 'light';
  nextSide = 'left';
  nextRule = 'end';

  sprite = '0px';



  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    setTimeout(() => {
      this.eventService.setState('CombatEvent');
      this.eventService.setPhase('CombatOption');
    }, 1500);

  }

  changeStateTwo() {
    this.nextState = this.nextState === 'first' ? 'last' : 'first';
    setTimeout(() => {
      this.eventService.setState('CombatEvent');
      this.eventService.setPhase('CombatOption');
    }, 2500);

  }

  changeStateThree() {
    this.nextNode = this.nextNode === 'alpha' ? 'omega' : 'alpha';
    setTimeout(() => {
      this.eventService.setState('RestEvent');
      this.eventService.setPhase('RestOption');
    }, 1500);
  }

  changeStateFour() {
    this.nextMoon = this.nextMoon === 'ashen' ? 'one' : 'ashen';
    setTimeout(() => {
      this.eventService.setState('CombatEvent');
      this.eventService.setPhase('CombatOption');
    }, 2000);
  }

  changeStateFive() {
    this.nextHunt = this.nextHunt === 'night' ? 'hunt' : 'night';
    setTimeout(() => {
      this.eventService.setState('CombatEvent');
      this.eventService.setPhase('CombatOption');
    }, 2000);
  }

  changeStateSix() {
    this.nextOfKin = this.nextOfKin === 'light' ? 'dark' : 'light';
    setTimeout(() => {
      this.eventService.setState('RestEvent');
      this.eventService.setPhase('RestOption');
    }, 1750);
  }

  changeStateSeven() {
    this.nextSide = this.nextSide === 'left' ? 'right' : 'left';
    setTimeout(() => {
      this.eventService.setState('CombatEvent');
      this.eventService.setPhase('CombatOption');
    }, 1500);
  }

  changeStateEight() {
    this.nextRule = this.nextRule === 'end' ? 'time' : 'end';
    setTimeout(() => {
      this.eventService.setState('CombatEvent');
      this.eventService.setPhase('CombatOption');
    }, 1500);
  }

  constructor(private eventService: EventService, private testService: TestService) { }

  ngOnInit() {
    this.timerSub = this.eventService.timer$.subscribe(timer => {
      this.text = timer.toString();
      this.sprite = (timer * (-42)).toString() + 'px';
    });

    this.testSub = this.testService.test$.subscribe(test => {
      this.test = test;
    });

    this.stateSub = this.eventService.state$.subscribe(state => {
      this.state = state;

      switch (this.state) {
        case 'one':
          this.changeState();
          break;

        case 'two':
          this.changeStateTwo();
          break;

        case 'three':
          this.changeStateThree();
          break;

        case 'four':
          this.changeStateFour();
          break;

        case 'five':
          this.changeStateFive();
          break;

        case 'six':
          this.changeStateSix();
          break;

        case 'seven':
          this.changeStateSeven();
          break;

        case 'eight':
          this.changeStateEight();
          break;
      }
    });
  }

  ngOnDestroy() {
    if (this.timerSub !== undefined) {
      this.timerSub.unsubscribe();
    }
    if (this.testSub !== undefined) {
      this.testSub.unsubscribe();
    }
    if (this.stateSub !== undefined) {
      this.stateSub.unsubscribe();
    }
  }

}
