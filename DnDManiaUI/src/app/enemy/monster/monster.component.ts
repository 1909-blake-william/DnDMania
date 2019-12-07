import { Component, OnInit } from '@angular/core';
import { Enemy } from '../models/enemy.model';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {

  hi = [new Enemy(1,'f',1,1,1,1,1,1,1,1), new Enemy(2,'g',2,2,2,2,2,2,2,2), new Enemy(3,'h',3,3,3,3,3,3,3,3)];
  constructor() { }

  ngOnInit() {
  }

}
