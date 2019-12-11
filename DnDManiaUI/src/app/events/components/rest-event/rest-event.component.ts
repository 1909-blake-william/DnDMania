import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-rest-event',
  templateUrl: './rest-event.component.html',
  styleUrls: ['./rest-event.component.css']
})
export class RestEventComponent implements OnInit , OnDestroy{

  @Input("eventName") eventName;

  eventClass = 'btn btn-secondary disabled';

  active = false;

  timer = 0;
  timerSubscription: Subscription;

  state = '';
  stateSubscription: Subscription;

  phase = '';
  phaseSubscription: Subscription;

  maxHpSubscription: Subscription;
  partyMaxHp = 0;

  curHpSubscription: Subscription;
  partyCurHp = 0;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.timerSubscription = this.eventService.timer$.subscribe(timer => {
      this.timer = timer;
    });

    this.stateSubscription = this.eventService.state$.subscribe(state => {
      this.state = state;
      this.active = (this.state === this.eventName);
    });

    this.phaseSubscription = this.eventService.phase$.subscribe(phase => {
      this.phase = phase;
      if (this.phase === 'Rest') {
        this.rest();
      }
    });

    this.maxHpSubscription = this.eventService.maxHp$.subscribe(maxHp => {
      this.partyMaxHp = maxHp;
    });

    this.curHpSubscription = this.eventService.curHp$.subscribe(curHp => {
      this.partyCurHp = curHp;
    });

  }

  ngOnDestroy() {
    if (this.timerSubscription !== undefined) {
      this.timerSubscription.unsubscribe();
    }
    if (this.stateSubscription !== undefined) {
      this.stateSubscription.unsubscribe();
    }
    if (this.phaseSubscription !== undefined) {
      this.phaseSubscription.unsubscribe();
    }
    if (this.maxHpSubscription !== undefined) {
      this.maxHpSubscription.unsubscribe();
    }
    if (this.curHpSubscription !== undefined) {
      this.curHpSubscription.unsubscribe();
    }
  }

  rest() {
    this.eventService.pushLog('~~~~~');
    this.eventService.pushLog('Resting');
    this.eventService.pushLog('~~~~~');
    const restoredHp = this.partyCurHp + 20;
    if (restoredHp > this.partyMaxHp) {
      this.eventService.setCurHp(this.partyMaxHp);
      this.partyCurHp = this.partyMaxHp;
    } else {
      this.partyCurHp = restoredHp;
      this.eventService.setCurHp(this.partyCurHp);
    }
    this.eventService.pushLog('Restored 20 Health Pool!');
    this.eventService.pushLog(`Party rested! Party's Health Pool is now : ` + this.partyCurHp + '.');

    this.eventService.setPhase('Finished');
  }
}

