import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private teamData: any[];
  addTeam = false;
  init = true;
  newScore = false;
  round: number;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.teamData = this.dataService.getTeamData();
  }

  startGame() {
    this.init = false;
    this.round = this.teamData[0].scores.length + 1;
  }

  endRound() {
    this.newScore = true;
  }

  newTeam() {
    this.addTeam = true;
  }

  verwijderTeam(event) {
    this.teamData = this.dataService.removeTeam(event);
  }

  voegTeamToe(event) {
    this.teamData = this.dataService.addTeam(event);
    this.addTeam = false;
  }

  voegScoresToe(event) {
    this.teamData = this.dataService.addScores(event);
    this.round = this.teamData[0].scores.length;
    this.newScore = false;
  }

  reset() {
    this.teamData = this.dataService.resetScores();
    this.init = true;
  }
}
