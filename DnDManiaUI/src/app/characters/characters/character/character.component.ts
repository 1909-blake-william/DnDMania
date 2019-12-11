import { Component, OnInit } from '@angular/core';
import { Character } from '../../../models/character';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CharacterNewServiceService } from '../../services/character-new-service.service';
import { Enemy } from 'src/app/models/enemy.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  ClassName = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin',
    'Ranger', 'Rogue', 'Sorcerer', 'Warlock'];

  Races = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'HalfElf', 'HalfOrc', 'Tiefling'];

  model = new Character('Ex', 'Barbarian', 'Human', 5, 5, 5, 5, 5, 1, 1, 1, 2, true);

  submitted = false;
  counter = 0;
  character: Character[] = [];

  constructor(private httpClient: HttpClient, private router: Router, private characterService: CharacterNewServiceService) { }

  ngOnInit() {
    this.character = this.characterService.getCharacter();
    if (this.character.length === 4) {
      this.router.navigateByUrl('/view');
    }
  }

  onSubmit() {
    this.counter++;
    if (this.counter === 4) {
      this.submitted = true;
      this.router.navigateByUrl('/view');
    }
    let n = this.model.name;
    let c = this.model.className;
    let r = this.model.race;
    this.httpClient.post<Character>(`http://localhost:8080/project2/characters/${n}/${c}/${r}`, {
    })
      .subscribe(data => {
        console.log(data as Character);
        let char: Character = new Character(
          data.name,
          data.className,
          data.race,
          data.healthPoints,
          data.armorClass,
          data.initiative,
          data.initiativeMod,
          data.attack,
          data.dmg,
          data.dmgMod,
          data.level,
          data.special,
          data.type);
        console.log(char);

        this.characterService.pushCharacter(char);
      }, err => {
        console.log(err);
      });
  }

  levelUp() {
    for (let index = 0; index < this.character.length; index++) {
      this.character[index].level = this.character[index].level + 1;
      this.character[index].healthPoints +=  Math.floor(Math.random() * 4);
      this.character[index].armorClass += Math.floor(Math.random() * 4);
      this.character[index].dmg += Math.floor(Math.random() * 4);
    }
    console.log(this.character);
  }
}
