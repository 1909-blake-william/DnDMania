import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/events/services/event.service';

@Component({
  selector: 'app-player-option',
  templateUrl: './player-option.component.html',
  styleUrls: ['./player-option.component.css']
})
export class PlayerOptionComponent implements OnInit {

  phase = 'Finished';
  phaseSub: Subscription;

  nextEvent = 'one';
  eventArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.phaseSub = this.eventService.phase$.subscribe(phase => {
      this.phase = phase;
    });
  }

  nextOption() {
    console.log(this.phase);
    if (this.phase === 'Finished') {
      this.nextEvent = this.eventArray.shift();
      this.phase = 'pause';
      this.eventService.setPhase('pause');
      this.eventService.setState(this.nextEvent);

    } else if (this.phase === 'CombatOption') {
      this.eventService.setPhase('Initiate');

    } else if (this.phase === 'RestOption') {
      this.eventService.setPhase('Rest');
    }
  }

}
