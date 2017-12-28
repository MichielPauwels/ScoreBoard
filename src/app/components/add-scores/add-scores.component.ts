import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-scores',
  templateUrl: './add-scores.component.html',
  styleUrls: ['./add-scores.component.scss']
})
export class AddScoresComponent implements OnInit {

  @Input()
  teams: any[];
  @Output()
  onSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  close: EventEmitter<any> = new EventEmitter<any>();

  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    const controls = {};
    this.teams.forEach(team => controls[team.name] = '');
    this.myForm = this._fb.group(controls);
  }

  voegToe() {
    const value = this.myForm.value;
    // tslint:disable-next-line:forin
    for (const key in value) {
      if (!value[key]) { value[key] = 0; }
      value[key] = Number(value[key]);
    }
    this.onSubmit.emit(value);
  }

  closeBox() {
    this.close.emit(null);
  }

}
