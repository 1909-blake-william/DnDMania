import { Injectable } from '@angular/core';
import { Character } from '../../models/character';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterNewServiceService {
  private characters: Character[] = [];

  private charStream = new ReplaySubject<Character>(4);
  chars$ = this.charStream.asObservable();

  pushCharacter(player: Character) {
    this.characters.push(player);
    this.charStream.next(player);
    console.log('pushed player: current size of array is ' + this.characters.length);
  }

  getCharacter() {
    console.log('Passing character');
    return this.characters;
  }
  constructor() {
    console.log('---new Character Service---');
  }
}
