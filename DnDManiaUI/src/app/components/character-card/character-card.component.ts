import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  models = [new Character( 'Dr IQ', 'Barbarian', 'Human', 5, 5, 5, 5, 5, 1, 1, 1, 2, true),
  new Character('Dr IQ 2', 'Bard', 'Human', 5, 5, 5, 5, 5, 1, 1, 1, 2, true)];

  constructor() {
    console.log(this.models[0]);
  }

  ngOnInit() {
  }

}
