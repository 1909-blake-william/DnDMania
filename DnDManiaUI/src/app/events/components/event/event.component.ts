import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit, OnDestroy {

  @Input("eventName") eventName;

  eventClass = 'btn btn-secondary disabled';

  timer = 0;
  timerSubscription: Subscription;

  state = '';
  stateSubscription: Subscription;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.timerSubscription = this.eventService.timer$.subscribe(timer => {
      this.timer = timer;
      this.showState();
    });

    this.stateSubscription = this.eventService.state$.subscribe(state => {
      this.state = state;
    });
  }

  showState() {
    if (this.state !== this.eventName) {
      this.eventClass = 'btn btn-secondary disabled';
    } else {
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
    }
  }

  ngOnDestroy() {
    if (this.timerSubscription !== undefined) {
      this.timerSubscription.unsubscribe();
    }
    if (this.stateSubscription !== undefined) {
      this.stateSubscription.unsubscribe();
    }
  }

}
