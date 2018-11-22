import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Input } from '@angular/core';
import { EventsService, Events } from '../events.service';

@Component({
  selector: 'app-day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.scss']
})
export class DayCalendarComponent implements OnInit {

  @Input() dayDate: moment.Moment;
  events : Events[];

  constructor(private eventsService:EventsService) { }

  ngOnInit() {
    this.eventsService.getAllEvents().subscribe(data => this.events = data);
    
  }

  getEventForDay(date){
    return  this.events.find((event) => {
      let dateStart= moment(event.start_time);
      let dateToCompare = date.mDate;
      return dateStart.isSame(dateToCompare, 'day')
    })
  }

}
