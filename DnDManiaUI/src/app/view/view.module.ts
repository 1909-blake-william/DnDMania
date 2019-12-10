import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { EventService } from '../events/services/event.service';
import { ViewRoutingModule } from './view-routing.module';
import { EventsModule } from '../events/events.module';
import { PlayerOptionComponent } from './player-option/player-option.component';

@NgModule({
  declarations: [ViewComponent, PlayerOptionComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    EventsModule
  ],
  providers: [
    EventService
  ]
})
export class ViewModule { }
