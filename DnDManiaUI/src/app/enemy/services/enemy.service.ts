import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enemy } from '../models/enemy.model';

@Injectable({
  providedIn: 'root'
})
export class EnemyService {
  constructor(private httpClient: HttpClient) { }

  getGroup(groupnumber) {
    if (groupnumber === 0) {
      this.httpClient.get<Enemy[]>('http://localhost:8080/project2/monsters', {
      })
        .subscribe(data => {
          console.log(data);
          return data;
        }, err => {
          console.log(err);
        });
    } else if (groupnumber <= 9 && groupnumber > 0) {
      this.httpClient.get<Enemy[]>(`http://localhost:8080/project2/monsters?groupnumber=${groupnumber}`)
        .subscribe(data => {
          return data;
        }, err => {
          console.log(err);
        });
    } else {
      console.log("invalid number")
    }
  }
}
