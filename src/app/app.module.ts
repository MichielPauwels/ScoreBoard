import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DataService } from './services/data.service';


import { AppComponent } from './app.component';
import { TeamboardComponent } from './components/teamboard/teamboard.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddScoresComponent } from './components/add-scores/add-scores.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamboardComponent,
    AddTeamComponent,
    AddScoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
