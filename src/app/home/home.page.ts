import { Component ,Input} from '@angular/core';
import { CalendarDate } from '../components/month-calendar/month-calendar.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  dateCalendar: CalendarDate;
  dateUpdate: CalendarDate;

  constructor() { }

  ngOnInit(): void {
  }

  dateSelected(data: CalendarDate){
    this.dateCalendar= data;
  }

  updateCal(data: CalendarDate){
    this.dateUpdate= data;
  }
}

