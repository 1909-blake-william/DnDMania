import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsContainerComponent } from './components/events-container/events-container.component';
import { EventComponent } from './components/event/event.component';
import { EventService } from './services/event.service';
import { FormsModule } from '@angular/forms';
import { EventsRoutingModule } from './events-routing.module';
import { CombatEventComponent } from './components/combat-event/combat-event.component';



@NgModule({
  declarations: [
    EventsContainerComponent,
    EventComponent,
    CombatEventComponent
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
