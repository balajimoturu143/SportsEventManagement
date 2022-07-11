import { Component, OnInit } from '@angular/core';
import { sport } from '../../models/sport.model';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor() { }

  sports: sport[] = [
    new sport(2001, 60, "Cricket", "Outdoor"),
    new sport(2002, 50, "Football", "Outdoor")
  ]

  ngOnInit(): void {
  }

}
