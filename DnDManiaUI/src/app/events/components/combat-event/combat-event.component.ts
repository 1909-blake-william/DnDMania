import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Subscription } from 'rxjs';
import { Entity } from 'src/app/models/entity.interface';
import { CombatEventService } from '../../services/combat-event.service';
import { TestModelService } from 'src/app/models/test-model.service';

@Component({
  selector: 'app-combat-event',
  templateUrl: './combat-event.component.html',
  styleUrls: ['./combat-event.component.css']
})
export class CombatEventComponent implements OnInit, OnDestroy {

  @Input("eventName") eventName;

  eventClass = 'btn btn-secondary disabled';

  active = false;

  timer = 0;
  timerSubscription: Subscription;

  state = '';
  stateSubscription: Subscription;

  phase = '';
  phaseSubscription: Subscription;

  initTable: Entity[] = new Array();
  initSubscription: Subscription;

  enemyHp: number;
  partyHp: number;

  constructor(private eventService: EventService, private combatService: CombatEventService, private testModel: TestModelService) { }

  ngOnInit() {
    this.timerSubscription = this.eventService.timer$.subscribe(timer => {
      this.timer = timer;
      this.showState();
    });

    this.stateSubscription = this.eventService.state$.subscribe(state => {
      this.state = state;
      this.active = (this.state === this.eventName);
    });

    this.phaseSubscription = this.eventService.phase$.subscribe(phase => {
      this.phase = phase;
      console.log(phase);
      if (this.active) {
        if (this.phase === 'initiate') {
          this.testInit();
        }
      }
    });

    this.initSubscription = this.combatService.initEntity$.subscribe(entity => {
      if (this.active) {
        this.addToInitTable(entity);
      }
    });
  }

  showState() {
    if (!this.active) {
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

  addToInitTable(entity: Entity) {
    this.initTable.push(entity);
    console.log(this.initTable.length);

    if (this.initTable.length === 7) {
      console.log('We got all entities!!!');

      this.initTable.sort((a, b) => b.initiative - a.initiative);

      for (let i = 0; i < 7; i++) {
        console.log(this.initTable[i].name, ': ', this.initTable[i].initiative);
        if (this.initTable[i].type) {
          console.log('Char');
        } else {
          console.log('Enemy');
        }
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

  testInit() {
    this.testModel.EnemyArray.forEach(entity => {
      entity.initiate();
      this.combatService.addToInitTable(entity);
    });

    this.testModel.characterArray.forEach(entity => {
      entity.initiate();
      this.combatService.addToInitTable(entity);
    });
  }

}
