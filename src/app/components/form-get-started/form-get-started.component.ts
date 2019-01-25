import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-get-started',
  templateUrl: './form-get-started.component.html',
  styleUrls: ['./form-get-started.component.scss']
})
export class FormGetStartedComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  getStarted(form) {
    alert('Email: ' + form.controls.email.value);
    form.reset();
  }
}
