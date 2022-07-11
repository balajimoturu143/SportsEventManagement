import { Component, OnInit } from '@angular/core';
import { event } from '../../models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  events: event[] = [
    new event(1001, new Date('2022-07-18'), "IPL", 100, "Cricket"),
    new event(1002, new Date('2022-07-18'), "FIFA", 100, "Football"),
    new event(1003, new Date('2022-07-18'), "Worldcup", 100, "Cricket")
  ]

  ngOnInit(): void {
  }

}
