import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  character: Character[] = [];

  models = [new Character( 'Dr IQ', 'Barbarian', 'Human', 5, 5, 5, 5, 5, 1, 1, 1, 2, true),
  new Character('Dr IQ 2', 'Bard', 'Human', 5, 5, 5, 5, 5, 1, 1, 1, 2, true)];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get<Character[]>('http://localhost:8080/project2/characters', {
    })
      .subscribe(data => {
        console.log(data);
        this.character = data;
      }, err => {
        console.log(err);
      });
  }

}
