import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsContainerComponent } from './components/events-container/events-container.component';
import { EventComponent } from './components/event/event.component';
import { EventService } from './services/event.service';
import { FormsModule } from '@angular/forms';
import { EventsRoutingModule } from './events-routing.module';
import { CombatEventComponent } from './components/combat-event/combat-event.component';
import { TestModelService } from '../models/test-model.service';
import { ChartsModule } from 'ng2-charts';
import { CombatEventChartComponent } from './components/combat-event-chart/combat-event-chart.component';
import { RestEventComponent } from './components/rest-event/rest-event.component';
import { EventLoggingComponent } from './components/event-logging/event-logging.component';



@NgModule({
  declarations: [
    EventsContainerComponent,
    EventComponent,
    CombatEventComponent,
    CombatEventChartComponent,
    RestEventComponent,
    EventLoggingComponent
  ],
  imports: [
    EventsRoutingModule,
    CommonModule,
    ChartsModule,
    FormsModule
  ],
  exports: [
    EventComponent,
    CombatEventComponent,
  ],
  providers: [
    EventService,
    TestModelService
  ]
})
export class EventsModule { }
