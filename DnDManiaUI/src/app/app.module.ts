import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestButtonComponent } from './components/test-button/test-button.component';
import { FormsModule } from '@angular/forms';
import { MonsterComponent } from './enemy/monster/monster.component';
import { ViewComponent } from './view/view/view.component';
// Added BrowserAnimationModule for animations to imports and import and ran npm install --save @angular/animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotFoundComponent,
    TestButtonComponent,
    MonsterComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
