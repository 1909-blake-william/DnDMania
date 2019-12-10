import { Injectable } from '@angular/core';
import { Character } from '../characters/models/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private characters: Character[] = [];

  pushCharacter(player: Character ) {
    this.characters.push(player);
  }

  getCharacter() {
    return this.characters;
  }
  constructor() { }
}
