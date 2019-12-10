import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.css']
})
export class CharacterDisplayComponent implements OnInit {

  @Input('char')
  char: Character;

  constructor() { }

  ngOnInit() {
  }

}
