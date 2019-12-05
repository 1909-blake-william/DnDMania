import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Entity } from 'src/app/models/entity.interface';

@Injectable({
  providedIn: 'root'
})
export class CombatEventService {

  private initStream = new ReplaySubject<Entity>(1, 200);
  initEntity$ = this.initStream.asObservable();

  constructor() { }

  addToInitTable(en: Entity) {
    this.initStream.next(en);
  }
}
