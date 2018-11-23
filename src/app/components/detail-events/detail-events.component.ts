import { Component, OnInit, Input } from '@angular/core';
import { DataBaseService, Events } from '../../service/data-base.service';
import * as moment from 'moment';

@Component({
  selector: 'app-detail-events',
  templateUrl: './detail-events.component.html',
  styleUrls: ['./detail-events.component.scss']
})
export class DetailEventsComponent implements OnInit {

  events: Events[];

  @Input()
  date: moment.Moment;

  constructor(private dataBaseSevice: DataBaseService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(){
    this.dataBaseSevice.getAllEvents().subscribe(data => this.events = data);
  }

}
