import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { ButtonEventsComponent } from '../components/button-events/button-events.component';
import { MonthCalendarComponent } from '../components/month-calendar/month-calendar.component';
import { DetailEventsComponent } from '../components/detail-events/detail-events.component';
import { DayCalendarComponent } from '../components/day-calendar/day-calendar.component';
import { ModalPage } from '../components/detail-events/modal-page/modal-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    ButtonEventsComponent,
    HomePage,
    MonthCalendarComponent,
    DetailEventsComponent,
    DayCalendarComponent,
    ModalPage
  ],
  exports: [
    MonthCalendarComponent,
    DetailEventsComponent,
    DayCalendarComponent,
  ],
  entryComponents: [
      ModalPage
  ],

})
export class HomePageModule { }

