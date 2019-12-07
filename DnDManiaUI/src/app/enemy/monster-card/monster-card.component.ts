import { Component, OnInit, Input } from '@angular/core';
import { Enemy } from 'src/app/enemy/models/enemy.model';

@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.css']
})
export class MonsterCardComponent implements OnInit {

  @Input('input')
  monster: Enemy;

  constructor() { }

  ngOnInit() {
  }

}
