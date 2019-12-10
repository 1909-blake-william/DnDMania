import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CharactersService } from 'src/app/characters/services/characters.service';
import { CharacterComponent } from './characters/character/character.component';
import { CharacterCardComponent } from './characters/character-card/character-card.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { CharactersRoutingModule } from './characters-routing.module';

@NgModule({
  declarations: [
    CharacterComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    CharactersRoutingModule
  ],
  exports: [
  ],
  providers: [
    CharactersService
  ]
})
export class CharactersModule { }
