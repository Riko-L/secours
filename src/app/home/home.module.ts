import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import {ButtonEventsComponent} from '../components/button-events/button-events.component';
import { MonthCalendarComponent } from '../components/month-calendar/month-calendar.component';
import { DetailEventsComponent } from '../components/detail-events/detail-events.component';
import { DayCalendarComponent } from '../components/day-calendar/day-calendar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
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
    DayCalendarComponent
  ],
  exports: [
    MonthCalendarComponent,
    DetailEventsComponent,
    DayCalendarComponent
  ]
})
export class HomePageModule { }

