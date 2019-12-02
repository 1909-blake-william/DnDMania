import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService implements OnDestroy {

  state = '';
  timer = 0;
  MAX_TIMER = 7; // rotates 0 ~ 7

  private timerStream = new ReplaySubject<number>(1);
  timer$ = this.timerStream.asObservable();

  private stateStream = new ReplaySubject<string>(1);
  state$ = this.stateStream.asObservable();

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

  setState(input: string) {
    this.state = input;
    this.stateStream.next(this.state);
  }

  ngOnDestroy() {
    if (this.interval !== undefined) {
      clearInterval(this.interval);
    }
  }
}
