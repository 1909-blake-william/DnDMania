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
      this.showState();
    });

    this.stateSubscription = this.eventService.state$.subscribe(state => {
      this.state = state;
      this.active = (this.state === this.eventName);
    });

    this.phaseSubscription = this.eventService.phase$.subscribe(phase => {
      this.phase = phase;
    });

    this.maxHpSubscription = this.eventService.maxHp$.subscribe(maxHp => {
      this.partyMaxHp = maxHp;
    });

    this.curHpSubscription = this.eventService.curHp$.subscribe(curHp => {
      this.partyCurHp = curHp;
    });
  }

  showState() {
    if (this.active) {
      const color = Math.floor(this.timer / 2);
      switch (color) {
        case 0:
          this.eventClass = 'btn btn-primary';
          break;

        case 1:
          this.eventClass = 'btn btn-success';
          break;

        case 2:
          this.eventClass = 'btn btn-warning';
          break;

        case 3:
          this.eventClass = 'btn btn-info';
          break;

        default:
          this.eventClass = 'btn btn-secondary disabled';
          break;
      }
    } else {
      this.eventClass = 'btn btn-secondary disabled';
    }
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
    this.eventService.setCurHp(this.partyMaxHp);
    this.eventService.pushLog(`Party rested! Party's Health Pool is now : ` + this.partyMaxHp + '.');
  }
}

