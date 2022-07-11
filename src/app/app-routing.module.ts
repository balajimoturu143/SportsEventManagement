import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { AddParticipationComponent } from './participation/add-participation/add-participation.component';
import { GetParticipantsComponent } from './participation/get-participants/get-participants.component';
import { AddPlayerComponent } from './player/add-player/add-player.component';
import { PlayersComponent } from './player/players/players.component';
import { AddEventComponent } from './sport-event/add-event/add-event.component';
import { GetEventByNameComponent } from './sport-event/get-event-by-name/get-event-by-name.component';
import { GetSportByNameComponent } from './sport-event/get-sport-by-name/get-sport-by-name.component';
import { SportEventComponent } from './sport-event/sport-event.component';

const appRoutes: Routes = [
  { path: "players", component: PlayersComponent },
  { path: "sport-event", component: SportEventComponent },
  { path: "get-participants", component: GetParticipantsComponent },
  { path: "add-participation", component: AddParticipationComponent },
  { path: "add-player", component: AddPlayerComponent },
  { path: "add-event", component: AddEventComponent },
  { path: "get-event-by-name/:id", component: GetEventByNameComponent },
  { path: "get-sport-by-name/:id", component: GetSportByNameComponent }
  // { path: "not-found", component: ErrorHandlingComponent },
  // { path: "**", redirectTo: "/not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
