import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { HttpClient } from '@angular/common/http';
import { CharactersService } from 'src/app/services/characters.service';

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

