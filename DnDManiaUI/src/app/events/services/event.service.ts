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

  private maxHpStream = new ReplaySubject<number>(1);
  maxHp$ = this.maxHpStream.asObservable();

  private currentHpStream = new ReplaySubject<number>(1);
  curHp$ = this.currentHpStream.asObservable();

  private loggingStream = new ReplaySubject<string>(1);
  logging$ = this.loggingStream.asObservable();

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

  setMaxHp(maxHp: number) {
    this.maxHpStream.next(maxHp);
  }

  setCurHp(curHp: number) {
    this.currentHpStream.next(curHp);
  }

  pushLog(log: string) {
    this.loggingStream.next(log);
  }

  ngOnDestroy() {
    if (this.interval !== undefined) {
      clearInterval(this.interval);
    }
  }
}
