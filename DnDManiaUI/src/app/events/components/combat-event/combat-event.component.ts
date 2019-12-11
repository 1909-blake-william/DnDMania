import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Subscription } from 'rxjs';
import { Entity } from 'src/app/models/entity.interface';
import { CombatEventService } from '../../services/combat-event.service';
import { Character } from 'src/app/models/character';


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

  maxHpSubscription: Subscription;

  curHpSubscription: Subscription;

  initTable: Entity[] = [];
  initSubscription: Subscription;

  partyHp = 0;
  partyMaxHp = 0;
  partyAc = 0;
  enemyHp = 0;
  enemyMaxHp = 0;
  enemyAc = 0;

  partyHpChart = [0, 0]; // Current Hp, Lost Hp
  enemyHpChart = [0, 0]; // Current Hp, Lost Hp

  runningCombat = false;

  combatLog: string[] = new Array();

  constructor(
    private eventService: EventService,
    private combatService: CombatEventService) {
    console.log('is this being created twice too?');
  }

  ngOnInit() {
    this.timerSubscription = this.eventService.timer$.subscribe(timer => {
      this.timer = timer;
      if (this.active && this.runningCombat && timer % 2 === 0) {
        // call combat function
        this.takeCombatTurn(this.initTable);
      }
    });

    this.stateSubscription = this.eventService.state$.subscribe(state => {
      this.state = state;
      this.active = (this.state === this.eventName);
      if (this.active) {
        this.initTable = new Array();
      }
    });

    this.phaseSubscription = this.eventService.phase$.subscribe(phase => {
      this.phase = phase;
      if (this.active) {
        if (this.phase === 'Initiate') {
          this.partyHp = this.partyHp || 0;
          this.partyMaxHp = 0;
          this.partyAc = 0;
          this.enemyHp = 0;
          this.enemyMaxHp = 0;
          this.enemyAc = 0;
          this.combatLog = new Array();
          this.eventService.pushLog('-----');
          this.eventService.pushLog('Party has encountered Monsters!!!');
          this.eventService.pushLog('-----');

          setTimeout(() => { this.initCombat(); }, 1000);
        }
      }
    });

    this.initSubscription = this.combatService.initEntity$.subscribe(entity => {
      if (this.active) {
        entity.initiate();
        this.addToInitTable(entity);
      }
    });

    this.maxHpSubscription = this.eventService.maxHp$.subscribe(maxHp => {
      this.partyMaxHp = maxHp;
    });

    this.curHpSubscription = this.eventService.curHp$.subscribe(curHp => {
      this.partyHp = curHp;
    });
  }

  addToInitTable(entity: Entity) {
    if (entity.type) {
      console.log(entity as Character);
      this.initTable.push(entity as Character);
    } else {
      this.initTable.push(entity);
    }
  }

  initCombat() {
    console.log(this.initTable);

    this.initTable.sort((a, b) => b.initiative - a.initiative);

    let numEnemy = 0;

    for (let i = 0; i < this.initTable.length; i++) {

      if (this.initTable[i].type) {
        this.partyMaxHp += this.initTable[i].healthPoints;
        this.partyAc += this.initTable[i].armorClass;
      } else {
        this.enemyMaxHp += this.initTable[i].healthPoints;
        this.enemyAc += this.initTable[i].armorClass;
        numEnemy++;
      }
    }

    this.eventService.setMaxHp(this.partyMaxHp);

    this.partyAc = Math.ceil(this.partyAc / 4);
    this.enemyAc = Math.ceil(this.enemyAc / numEnemy);

    this.partyHp = this.partyHp || this.partyMaxHp;
    this.partyHpChart = [this.partyHp, this.partyMaxHp - this.partyHp];

    this.enemyHp = this.enemyMaxHp;
    this.enemyHpChart = [this.enemyHp, 0];

    this.runningCombat = true;

  }

  takeCombatTurn(initTable: Entity[]) {

    initTable[0].turn = true;
    initTable[initTable.length - 1].turn = false;

    let dmg: number;
    let attack: number;
    attack = Math.ceil(Math.random() * 20);
    const crit: boolean = (attack === 20);
    let log: string;

    //
    if (initTable[0].type) { // it is player Character attacking this turn
      log = 'Character: ' + initTable[0].name + ',   '
        + 'attack roll : ' + attack + ' + ' + initTable[0].attack + ' ';
      if (crit) {
        log += ',  CRITICAL!!!  ';
      }
      if (attack + initTable[0].attack >= this.enemyAc) {
        dmg = initTable[0].combatAction(crit);
        // dmg = Math.ceil(initTable[0].dmg * Math.random());
        // if (crit) {
        //   dmg *= 2;
        // }
        // dmg += initTable[0].dmgMod;

        log += ',   hits!  dealt ' + dmg + ' damage.';
      }
      if (dmg) {
        this.enemyHp -= dmg;
        if (this.enemyHp < 0) {
          this.enemyHp = 0;
        }
        const dif = this.enemyMaxHp - this.enemyHp;
        this.enemyHpChart = [this.enemyHp, dif];
      }

    } else { // it is enemy attacking this turn
      log = 'Enemy: ' + initTable[0].name + ',   '
        + 'attack roll : ' + attack + ' + ' + initTable[0].attack + ' ';
      if (crit) {
        log += ',  CRITICAL!!!  ';
      }

      if (attack + initTable[0].attack >= this.partyAc) {
        dmg = initTable[0].combatAction(crit);
        // dmg = Math.ceil(initTable[0].dmg * Math.random());
        // if (crit) {
        //   dmg *= 2;
        // }
        // dmg += initTable[0].dmgMod;

        log += ',   hits!  dealt ' + dmg + ' damage.';
      }
      if (dmg) {
        this.partyHp -= dmg;
        if (this.partyHp < 0) {
          this.partyHp = 0;
        }
        const dif = this.partyMaxHp - this.partyHp;
        this.partyHpChart = [this.partyHp, dif];
      }

    }

    // logging the turn to display to user
    this.eventService.pushLog(log);
    this.combatLog = [log].concat(this.combatLog);

    // setting up the turns for rest of entities
    initTable.forEach(entity => {
      entity.initiative++;
    });
    initTable[0].initiative = 0;
    initTable.sort((a, b) => b.initiative - a.initiative);

    // check if Party is dead
    if (this.partyHp <= 0) {
      initTable.forEach(en => en.turn = false);
      this.partyHp = 0;
      this.runningCombat = false;
      this.eventService.setPhase('refresh');
      this.eventService.setCurHp(this.partyHp);
      this.eventService.pushLog('!!!!!');
      this.eventService.pushLog('OH NO, TPK!!!');
      this.eventService.pushLog('!!!!!');
      // alert('You Lost');
    }

    // check if Enemies are dead
    if (this.enemyHp <= 0) {
      initTable.forEach(en => en.turn = false);
      this.enemyHp = 0;
      this.runningCombat = false;
      this.eventService.setPhase('Finished');
      this.eventService.pushLog('*****');
      this.eventService.pushLog('The party has Defeated the Monsters!!!');
      this.eventService.pushLog('*****');
      this.eventService.setCurHp(this.partyHp);
      // alert('You won, now go outside and play');
    }
  }

  // Chart Events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  // Destroy
  ngOnDestroy() {
    if (this.timerSubscription !== undefined) {
      this.timerSubscription.unsubscribe();
    }
    if (this.stateSubscription !== undefined) {
      this.stateSubscription.unsubscribe();
    }

    if (this.phaseSubscription !== undefined) {
      this.phaseSubscription.unsubscribe();
    }

    if (this.initSubscription !== undefined) {
      this.initSubscription.unsubscribe();
    }

    if (this.maxHpSubscription !== undefined) {
      this.maxHpSubscription.unsubscribe();
    }

    if (this.curHpSubscription !== undefined) {
      this.curHpSubscription.unsubscribe();
    }
  }

}
