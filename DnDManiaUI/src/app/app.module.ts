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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { ChartsTestComponent } from './components/charts-test/charts-test.component';
import { ChartsModule } from 'ng2-charts';
import { TestComponent } from './components/test/test.component';
=======
import {MatCardModule, MatButtonModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 7288d5a7e7ec8286557160f9413c211f31e470d3

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotFoundComponent,
<<<<<<< HEAD
    TestButtonComponent,
    CharacterComponent,
    ChartsTestComponent,
    TestComponent,
=======
    TestButtonComponent
>>>>>>> 7288d5a7e7ec8286557160f9413c211f31e470d3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NgbModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
