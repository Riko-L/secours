import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Input } from '@angular/core';
import { Events, DataBaseService } from '../../service/data-base.service';
import { CalendarDate } from '../month-calendar/month-calendar.component';

@Component({
  selector: 'app-day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.scss']
})
export class DayCalendarComponent implements OnInit {

  @Input() dayDate: CalendarDate;
  events : Events[];

  constructor(private dataBaseService : DataBaseService) { }

  ngOnInit() {
    this.dataBaseService.getAllEvents().subscribe(data => this.events = data);
    
  }

  getEventForDay(date){
    return  this.events.find((event) => {
      let dateStart= moment(event.start_time);
      let dateToCompare = date.mDate;
      return dateStart.isSame(dateToCompare, 'day')
    })
  }

}
