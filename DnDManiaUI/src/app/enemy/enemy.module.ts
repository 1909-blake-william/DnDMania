import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterComponent } from './monster/monster.component';
import { MonsterCardComponent } from './monster-card/monster-card.component';
import { EnemyRoutingModule } from './enemy-routing.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { MonsterDisplayComponent } from './monster-display/monster-display.component';


@NgModule({
  declarations: [MonsterComponent, MonsterCardComponent, MonsterDisplayComponent],
  imports: [
    CommonModule,
    EnemyRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MonsterCardComponent
  ]
})
export class EnemyModule { }
