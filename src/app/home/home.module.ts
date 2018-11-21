import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {DetailEventsComponent} from '../detail-events/detail-events.component';
import {ButtonEventsComponent} from '../button-events/button-events.component';

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
      HomePage,
      DetailEventsComponent,
      ButtonEventsComponent
  ]
})
export class HomePageModule {}
