import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CharacterComponent } from './characters/character/character.component';
import { CharacterCardComponent } from './characters/character-card/character-card.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterDisplayComponent } from './characters/character-display/character-display.component';
import { Character } from '../models/character';

@NgModule({
  declarations: [
    CharacterComponent,
    CharacterCardComponent,
    CharacterDisplayComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    CharactersRoutingModule,
  ],
  exports: [
    CharacterCardComponent,
    CharacterDisplayComponent,
  ],
  providers: [
  ]
})
export class CharactersModule { }
