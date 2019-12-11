import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enemy } from '../../models/enemy.model';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnemyService {

  private enemyStream = new ReplaySubject<Enemy>(1);
  enemy$ = this.enemyStream.asObservable();

  constructor(private httpClient: HttpClient) { }

  getGroup(groupnumber): Enemy[] {
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
          const enemies: Enemy[] = [];
          data.forEach(enemy => {
            let en = new Enemy(
              enemy.id,
              enemy.name,
              enemy.challenge,
              enemy.healthPoints,
              enemy.armorClass,
              enemy.attack,
              enemy.dmg,
              enemy.dmgMod,
              enemy.initiative,
              enemy.initiativeMod,
              enemy.type);
            this.enemyStream.next(en);
            enemies.push(en);
          });
          return enemies;
        }, err => {
          console.log(err);
        });
    } else {
      console.log("invalid number")
      return [];
    }
  }
}
