import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/characters/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  ClassName = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin',
    'Ranger', 'Rogue', 'Sorcerer', 'Warlock'];

  Races = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'HalfElf', 'HalfOrc', 'Tiefling'];

  model = new Character('Dr IQ', 'Barbarian', 'Human', 5, 5, 5, 5, 5, 1, 1, 1, 2, true);

  submitted = false;
  counter = 0;
  character: Character[] = [];

  constructor(private httpClient: HttpClient, private router: Router, private characterService: CharactersService) { }

  ngOnInit() {
  this.character = this.characterService.getCharacter();
  if (this.character.length === 4) {
    this.router.navigateByUrl('/charactercard');
  }
  }

  onSubmit() {
    this.counter++;
    if (this.counter === 4) {
      this.submitted = true;
      this.router.navigateByUrl('/charactercard');
    }
    let n = this.model.name;
    let c = this.model.className;
    let r = this.model.race;
    this.httpClient.post<Character>(`http://localhost:8080/project2/characters/${n}/${c}/${r}`, {
    })
      .subscribe(data => {
        this.characterService.pushCharacter(data);
      }, err => {
        console.log(err);
      });
  }
}
