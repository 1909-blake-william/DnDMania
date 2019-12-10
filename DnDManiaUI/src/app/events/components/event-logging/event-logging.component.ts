import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-logging',
  templateUrl: './event-logging.component.html',
  styleUrls: ['./event-logging.component.css']
})
export class EventLoggingComponent implements OnInit, OnDestroy {

  loggingSubscription: Subscription;
  log: string[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.loggingSubscription = this.eventService.logging$.subscribe(logging => {
      this.log = [logging].concat(this.log);
    });
   }

   ngOnDestroy() {
     if (this.loggingSubscription !== undefined) {
       this.loggingSubscription.unsubscribe();
     }
   }

}
