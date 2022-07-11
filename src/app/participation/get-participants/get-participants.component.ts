import { Component, OnInit } from '@angular/core';
import { participation } from '../../models/participation.model';

@Component({
  selector: 'app-get-participants',
  templateUrl: './get-participants.component.html',
  styleUrls: ['./get-participants.component.css']
})
export class GetParticipantsComponent implements OnInit {

  participations: participation[] = [
    new participation(101, 1, "Balaji", 1001, "IPL", 2001, "Cricket", 1),
    new participation(102, 2, "Sanket", 1001, "IPL", 2001, "Cricket", 2),
    new participation(103, 3, "Hema Sundar", 1002, "FIFA", 2002, "Football", 2),
    new participation(104, 4, "Anitha", 1003, "Worldcup", 2001, "Cricket", 3),
    new participation(105, 5, "Yash", 1001, "IPL", 2001, "Cricket", 1),

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
