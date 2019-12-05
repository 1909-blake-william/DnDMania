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

  model = new Character(18, 'Dr IQ', this.Classes[9], this.Races[0], 5, 5, 5, { attack: 'punch', specialattack: 'spell' }, 5, 1);

  submitted = false;

  onSubmit() { this.submitted = true; }

  newCharacter() {
    this.model = new Character(30, ' ', ' ', ' ', 0, 0, 0, {attack: ' ', specialattack: ' '}, 0, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
