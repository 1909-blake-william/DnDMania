import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../../models/character';
import { CharacterNewServiceService } from '../../services/character-new-service.service';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/events/services/event.service';
import { CombatEventService } from 'src/app/events/services/combat-event.service';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.css']
})
export class CharacterDisplayComponent implements OnInit {

  @Input('char')
  char: Character;

  phaseSub: Subscription;

  constructor(
    private eventService: EventService,
    private combatService: CombatEventService) { }

  ngOnInit() {
    this.phaseSub = this.eventService.phase$.subscribe(phase => {
      if (phase === 'Initiate') {
        this.combatService.addToInitTable(this.char);
      }
    });
  }

}
