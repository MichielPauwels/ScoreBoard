import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private key = 'teamData';

  constructor() { }

  removeTeam(teamName: string): any {
    const teamData = this.getTeamData();
    const idx = teamData.findIndex(team => team.name === teamName);
    teamData.splice(idx, 1);
    this.setTeamData(teamData);
    return teamData;
  }

  addTeam(team: any) {
    const teamData = this.getTeamData();
    teamData.push(team);
    this.setTeamData(teamData);
    return teamData;
  }

  addScores(scores) {
    const teamData = this.getTeamData();
    teamData.forEach(team => {
      team.scores.push(scores[team.name]);
      team.score = team.scores.reduce((a, b) => a + b, 0);
    });
    teamData.sort((a, b) => b.score - a.score);
    this.setTeamData(teamData);
    return teamData;
  }

  resetScores() {
    const teamData = this.getTeamData();
    teamData.forEach(team => {team.scores = []; team.score = 0; });
    this.setTeamData(teamData);
    return teamData;
  }

  getTeamData(): any[] {
    const data = JSON.parse(localStorage.getItem(this.key));
    return data ? data : [];
  }

  setTeamData(data: any) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

}
