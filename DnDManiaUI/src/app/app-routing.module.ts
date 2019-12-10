import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TestButtonComponent } from './components/test-button/test-button.component';
import { ChartsTestComponent } from './components/charts-test/charts-test.component';
import { TestComponent } from './components/test/test.component';

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
    path: 'charts',
    component: ChartsTestComponent
  },
  {
    path: 'toggleTest',
    component: TestComponent
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
    loadChildren: () => import('./characters/characters.module').then(mod => mod.CharactersModule)
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
