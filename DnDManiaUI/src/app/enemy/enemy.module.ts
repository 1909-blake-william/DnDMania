import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterComponent } from './monster/monster.component';
import { MonsterCardComponent } from './monster-card/monster-card.component';



@NgModule({
  declarations: [MonsterComponent, MonsterCardComponent],
  imports: [
    CommonModule
  ]
})
export class EnemyModule { }
