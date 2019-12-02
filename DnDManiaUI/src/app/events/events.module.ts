import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsContainerComponent } from './components/events-container/events-container.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventComponent } from './components/event/event.component';
import { EventService } from './services/event.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventsContainerComponent,
    EventComponent
  ],
  imports: [
    EventsRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    EventService
  ]
})
export class EventsModule { }
