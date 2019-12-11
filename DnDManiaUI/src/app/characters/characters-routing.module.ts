import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './characters/character/character.component';
import { CharacterCardComponent } from './characters/character-card/character-card.component';

const routes: Routes = [
    {
        path: '',
        component: CharacterComponent
    },
    {
        path: 'charactercard',
        component: CharacterCardComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CharactersRoutingModule {}