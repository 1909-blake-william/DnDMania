import { Component, OnInit } from '@angular/core';
import { Enemy } from '../../models/enemy.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {
  groupnumber: number = 0;
  oops: Enemy[] = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {


  }

  getGroup() {
    if (this.groupnumber === 0) {
      this.httpClient.get<Enemy[]>('http://localhost:8080/project2/monsters', {
      })
        .subscribe(data => {
          console.log(data);
          this.oops = data;
        }, err => {
          console.log(err);
        });
    } else if (this.groupnumber <= 9 && this.groupnumber > 0) {
      this.httpClient.get<Enemy[]>(`http://localhost:8080/project2/monsters?groupnumber=${this.groupnumber}`)
        .subscribe(data => {
          this.oops = data;
        }, err => {
          console.log(err);
        });
    } else {
      console.log("invalid number")
    }
  }
}
