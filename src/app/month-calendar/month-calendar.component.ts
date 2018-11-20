import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DayEvent } from '../day-event';



@Component({
  selector: 'app-month-calendar',
  templateUrl: './month-calendar.component.html',
  styleUrls: ['./month-calendar.component.scss']
})
export class MonthCalendarComponent implements OnInit {

  calendarEvents :DayEvent[];
  daysInMonth: number;


  constructor() { }

  ngOnInit() {

    this.daysInMonth = moment().daysInMonth();
    this.setCalendarEvents(this.daysInMonth);

  }

  setCalendarEvents(daysInMonth) {
    this.calendarEvents = [];
      for(let i =0 ; i <= daysInMonth ;++i){
        let nameDay = moment().day(i).format('dddd').toString();
        this.calendarEvents.push({"day" : i , "nameDay": nameDay} as DayEvent );
      }

  }

  getNumberOfDayInMonth(): number {
    return moment().daysInMonth();
  }

  getDay() :number{
    return moment().day()
  }
}
