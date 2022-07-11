import { Component, OnInit } from '@angular/core';
import { player } from '../../models/player.model';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor() { }

  players: player[] = [
    new player(1, "Balaji", 22, 9276543345, "balaji@gmail.com", 1, "Cricket"),
    new player(2, "Sanket", 22, 9963224652, "sanket@gmail.com", 1, "Football"),
    new player(3, "Hema Sundar", 22, 8769857846, "hemasundar@gmail.com", 1, "Football"),
    new player(4, "Anitha", 22, 7128747345, "anitha@gmail.com", 2, "Cricket"),
    new player(5, "Yash", 22, 9564618345, "yash@gmail.com", 1, "Football")

  ]

  ngOnInit(): void {
  }

}
