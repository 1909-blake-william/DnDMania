import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Enemy } from 'src/app/models/enemy.model';
import { EventService } from 'src/app/events/services/event.service';
import { Subscription } from 'rxjs';
import { CombatEventService } from 'src/app/events/services/combat-event.service';

@Component({
  selector: 'app-monster-display',
  templateUrl: './monster-display.component.html',
  styleUrls: ['./monster-display.component.css']
})
export class MonsterDisplayComponent implements OnInit, OnDestroy {

  @Input('input')
  monster: Enemy;

  phaseSub: Subscription;

  constructor(private eventService: EventService, private combatService: CombatEventService) { }

  ngOnInit() {
    this.phaseSub = this.eventService.phase$.subscribe(phase => {
      if (phase === 'Initiate') {
        this.combatService.addToInitTable(this.monster);
      }
    });
  }

  ngOnDestroy() {
    this.phaseSub.unsubscribe();
  }
}
