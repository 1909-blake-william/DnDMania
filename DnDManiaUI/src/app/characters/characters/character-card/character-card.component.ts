import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { CharactersService } from 'src/app/characters/services/characters.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  characters: Character[] = [];

  constructor(private characterService: CharactersService) {}

  ngOnInit() {
    this.characters = this.characterService.getCharacter();
  }

}

