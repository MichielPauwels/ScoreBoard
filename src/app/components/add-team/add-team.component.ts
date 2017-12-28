import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  @Output()
  onSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  close: EventEmitter<any> = new EventEmitter<any>();

  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      imageUrl: ['']
    });
  }

  voegToe() {
    this.onSubmit.emit(Object.assign({}, this.myForm.value, {
      score: 0,
      scores: []
    }));
  }

  closeBox() {
    this.close.emit(null);
  }

}
