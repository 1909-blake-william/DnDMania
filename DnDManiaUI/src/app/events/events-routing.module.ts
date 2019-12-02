import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsContainerComponent } from './components/events-container/events-container.component';

const routes: Routes = [
    {
        path: '',
        component: EventsContainerComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class EventsRoutingModule {}
