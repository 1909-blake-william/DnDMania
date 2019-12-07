import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonsterComponent } from './monster/monster.component';
import { MonsterCardComponent } from './monster-card/monster-card.component';

const routes: Routes = [
    {
        path: '',
        component: MonsterComponent
    },
    {
        path: 'card',
        component: MonsterCardComponent
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
export class EnemyRoutingModule { }