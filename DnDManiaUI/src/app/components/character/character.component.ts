import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  Classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin',
            'Ranger', 'Rogue', 'Sorcerer', 'Warlock'];

  Races = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'HalfElf', 'HalfOrc', 'Tiefling'];

  model = new Character('Dr IQ', 'Barbarian', 'Human', 5, 5, 5, 5, 5, 1, 1, 1, 2, true);

  submitted = false;

  onSubmit() { this.submitted = true; }

  newCharacter() {
    this.model = new Character(' ', ' ', ' ', 0, 0, 0, 0, 0, 0, 1, 1, 0, true);
  }

  constructor() { }

  ngOnInit() {
  }

}
