import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataBaseService, Events } from '../../service/data-base.service';
import * as moment from 'moment';
import { CalendarDate } from '../month-calendar/month-calendar.component';

@Component({
  selector: 'app-detail-events',
  templateUrl: './detail-events.component.html',
  styleUrls: ['./detail-events.component.scss']
})
export class DetailEventsComponent implements OnInit ,OnChanges{
 

  events: Events[];

  @Input()
  dateCalendarInput:CalendarDate;

  constructor() { }

  ngOnInit() {
  
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.dateCalendarInput.currentValue) {
      this.getEvents(this.dateCalendarInput);
    }
  }

  getEvents(date: CalendarDate){
    console.log(date)
    this.events = date.events;
  }
 
}
