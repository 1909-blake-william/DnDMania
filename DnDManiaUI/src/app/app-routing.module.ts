import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TestButtonComponent } from './components/test-button/test-button.component';
import { CharacterComponent } from './characters/characters/character/character.component';
import { CharacterCardComponent } from './characters/characters/character-card/character-card.component';

const routes: Routes = [
  {
    path: 'nav',
    component: NavComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'button',
    component: TestButtonComponent
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then(mod => mod.EventsModule)
  },
  {
    path: 'monster',
    loadChildren: () => import('./enemy/enemy.module').then(mod => mod.EnemyModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./view/view.module').then(mod => mod.ViewModule)
  },
  {
    path: 'character',
    component: CharacterComponent
  },
  {
    path: 'charactercard',
    component: CharacterCardComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
