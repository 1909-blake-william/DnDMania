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
import { CharacterComponent } from './components/character/character.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsTestComponent } from './components/charts-test/charts-test.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotFoundComponent,
    TestButtonComponent,
    CharacterComponent,
    ChartsTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NgbModule,
    ChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
