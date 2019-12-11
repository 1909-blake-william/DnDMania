import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Character } from '../../../models/character';
import { CharacterNewServiceService } from '../../services/character-new-service.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  characters: Character[] = [];

  @Input('charInput')
  chars: Character[] = [];

  constructor(private characterService: CharacterNewServiceService) { }

  ngOnInit() {
    this.characters = this.characterService.getCharacter();
    // console.log(this.characters);
  }

}

