import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.css']
})
export class EventsContainerComponent implements OnInit {

  userInput = '';

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  enterState() {
    this.eventService.setState(this.userInput);
  }
}
