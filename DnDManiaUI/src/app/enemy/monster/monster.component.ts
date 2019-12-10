import { Component, OnInit } from '@angular/core';
import { Enemy } from '../models/enemy.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {
  oops: Enemy[] = [];
  hi = [new Enemy(1,'f',1,1,1,1,1,1,1,1), new Enemy(2,'g',2,2,2,2,2,2,2,2), new Enemy(3,'h',3,3,3,3,3,3,3,3)];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    
    this.httpClient.get<Enemy[]>('http://localhost:8080/project2/monsters', {
    })
      .subscribe(data => {
        console.log(data);
        this.oops = data;
      }, err => {
        console.log(err);
      });
  }

}
