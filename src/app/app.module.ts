import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { SportEventComponent } from './sport-event/sport-event.component';
import { ParticipationComponent } from './participation/participation.component';
import { PendingComponent } from './participation/pending/pending.component';
import { DeclinedComponent } from './participation/declined/declined.component';
import { PlayersComponent } from './player/players/players.component';
import { AddPlayerComponent } from './player/add-player/add-player.component';
import { DeletePlayerComponent } from './player/delete-player/delete-player.component';
import { SportsComponent } from './sport-event/sports/sports.component';
import { GetSportByNameComponent } from './sport-event/get-sport-by-name/get-sport-by-name.component';
import { AddEventComponent } from './sport-event/add-event/add-event.component';
import { DeleteEventComponent } from './sport-event/delete-event/delete-event.component';
import { EventsComponent } from './sport-event/events/events.component';
import { GetEventByNameComponent } from './sport-event/get-event-by-name/get-event-by-name.component';
import { UpdateStatusComponent } from './participation/update-status/update-status.component';
import { GetParticipantsComponent } from './participation/get-participants/get-participants.component';
import { AddParticipationComponent } from './participation/add-participation/add-participation.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { ApprovedComponent } from './participation/approved/approved.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    SportEventComponent,
    ParticipationComponent,
    PendingComponent,
    DeclinedComponent,
    PlayersComponent,
    AddPlayerComponent,
    DeletePlayerComponent,
    SportsComponent,
    GetSportByNameComponent,
    AddEventComponent,
    DeleteEventComponent,
    EventsComponent,
    GetEventByNameComponent,
    UpdateStatusComponent,
    GetParticipantsComponent,
    AddParticipationComponent,
    ErrorHandlingComponent,
    ApprovedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
