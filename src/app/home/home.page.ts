import { Component } from '@angular/core';
import { EventsService } from '../events.service';
import { Events } from '../events';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mydata: Events[];

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {

    this.getData();

  }

  getData() {
    this.eventsService.getAllEvents().subscribe(data => this.mydata = data);
  }

}
