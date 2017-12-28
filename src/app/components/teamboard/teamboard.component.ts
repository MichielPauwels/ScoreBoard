import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-teamboard',
  templateUrl: './teamboard.component.html',
  styleUrls: ['./teamboard.component.scss']
})
export class TeamboardComponent implements OnInit {

  @Input()
  teamData: any;
  @Input()
  order: number;
  @Output()
  onRemove: EventEmitter<string> = new EventEmitter<string>();

  bgcolor: any;

  constructor() { }

  ngOnInit() {
    if (!this.teamData.score) { this.teamData.score = 0; }
    if (!this.teamData.imageUrl) { this.teamData.imageUrl = 'https://studio100.com/public/img/logo-stacked.png'; }
    switch (this.order) {
      case 0 : this.bgcolor = 'linear-gradient(to bottom right, goldenrod, white, goldenrod)'; break;
      case 1 : this.bgcolor = 'linear-gradient(to bottom right, silver, white, silver)'; break;
      case 2 : this.bgcolor = 'linear-gradient(to bottom right, peru, white, peru)'; break;
    }
  }

  removeTeam() {
    this.onRemove.emit(this.teamData.name);
  }

}
