import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.css']
})
export class EventsContainerComponent implements OnInit {

  inputState = '';
  inputPhase = '';

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  enterState() {
    this.eventService.setState(this.inputState);
  }

  enterPhase() {
    this.eventService.setPhase(this.inputPhase);
  }
}
