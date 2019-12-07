import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TestButtonComponent } from './components/test-button/test-button.component';
import { ViewComponent } from './view/view/view.component';
import { CharacterComponent } from './components/character/character.component';
import { MonsterComponent } from './enemy/monster/monster.component'

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
    path: 'aa',
    pathMatch: 'full',
    redirectTo: '/not-found'
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'character',
    component: CharacterComponent
  },
  {
    path: 'monster',
    component: MonsterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
