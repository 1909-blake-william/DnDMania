import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService implements OnDestroy {

  state = '';
  phase = '';
  timer = 0;
  MAX_TIMER = 7; // rotates 0 ~ 7

  private timerStream = new ReplaySubject<number>(1);
  timer$ = this.timerStream.asObservable();

  private stateStream = new ReplaySubject<string>(1);
  state$ = this.stateStream.asObservable();

  private phaseStream = new ReplaySubject<string>(1);
  phase$ = this.phaseStream.asObservable();

  interval = setInterval(() => {
    this.elapseTime();
  }, 500);

  constructor() { }


  elapseTime() {
    if (this.timer < this.MAX_TIMER) {
      this.timer++;
    } else {
      this.timer = 0;
    }
    this.timerStream.next(this.timer);
  }

  setState(state: string) {
    this.state = state;
    this.stateStream.next(this.state);
  }

  setPhase(phase: string) {
    this.phase = phase;
    this. phaseStream.next(this.phase);
  }

  ngOnDestroy() {
    if (this.interval !== undefined) {
      clearInterval(this.interval);
    }
  }
}
