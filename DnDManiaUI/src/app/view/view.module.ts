import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { EventService } from '../events/services/event.service';
import { ViewRoutingModule } from './view-routing.module';

@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    ViewRoutingModule
  ],
  providers: [
    EventService
  ]
})
export class ViewModule { }
