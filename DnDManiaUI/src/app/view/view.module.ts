import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { EventService } from '../events/services/event.service';

@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule
  ],
  providers: [
    EventService
  ]
})
export class ViewModule { }
