import { Component, OnInit } from '@angular/core';
import { Events } from '../events';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-detail-events',
  templateUrl: './detail-events.component.html',
  styleUrls: ['./detail-events.component.scss']
})
export class DetailEventsComponent implements OnInit {

  events: Events[];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(){
    this.eventsService.getAllEvents().subscribe(data => this.events = data);
  }

}
