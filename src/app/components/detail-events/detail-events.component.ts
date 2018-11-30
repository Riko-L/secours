import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { DataBaseService, Events, Participant } from '../../service/data-base.service';
import * as moment from 'moment';
import { CalendarDate } from '../month-calendar/month-calendar.component';
import { ModalController } from '@ionic/angular';
import { ModalPage } from './modal-page/modal-page.page';

@Component({
  selector: 'app-detail-events',
  templateUrl: './detail-events.component.html',
  styleUrls: ['./detail-events.component.scss']
})

export class DetailEventsComponent implements OnInit, OnChanges {

  @Input()
  events: Events[];

  @Input()
  dateCalendarInput: CalendarDate;

  @Input()
  iamInProperty: boolean = false;

  @Output()
  calendarUpdate: EventEmitter<CalendarDate> = new EventEmitter<CalendarDate>();
  constructor(private databaseService: DataBaseService,private modalController: ModalController) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dateCalendarInput.currentValue) {
      this.getEvents(this.dateCalendarInput);
    }
    if (changes.iamInProperty) {
      console.log(this.iamInProperty)
    }
  }

  getEvents(date: CalendarDate) {
    this.events = date.events;
  }

  deleteEvent(event: Events) {
    this.databaseService.deleteEvent(event).subscribe(data => {
      this.calendarUpdate.emit(this.dateCalendarInput);
      const el = this.events.findIndex(tabevent => tabevent._id === data.id);
      this.events.splice(el, 1);
    });
  }

  async openModal(id: any) {

    const modalPage = await this.modalController.create({
        component: ModalPage,
        componentProps: {
            event: this.events.find( event => event._id === id)
        }
    });
    return await modalPage.present();
    }
  
  iamIn(event: Events): void {
    
    if (event.participants != undefined) {
      if (this.iamInProperty && !event.participants.includes(sessionStorage.getItem('loginName') as Participant)) {
        event.participants.push(sessionStorage.getItem('loginName') as Participant)
        this.databaseService.putEvent(event);
      } else {
        if (event.participants.includes(sessionStorage.getItem('loginName') as Participant)) {
          const userIndex = event.participants.findIndex(data => sessionStorage.getItem('loginName') == data.participant);
          event.participants.splice(userIndex, 1);
          this.databaseService.putEvent(event);
        }
      }
    } else {
      event.participants = [];
      event.participants.push(sessionStorage.getItem('loginName') as Participant)
      this.databaseService.putEvent(event);
    }
  }

  iamIcheck(event:Events) {
    if (event.participants != undefined) {
    return event.participants.includes(sessionStorage.getItem('loginName') as Participant);
    }
  }
}
