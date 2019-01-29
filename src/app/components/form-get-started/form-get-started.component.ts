import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-get-started',
  templateUrl: './form-get-started.component.html',
  styleUrls: ['./form-get-started.component.scss']
})
export class FormGetStartedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getStarted(form) {
    if (!form) {
      return;
    }

    form.controls.zipcode.setErrors(null);
    const zipcode = form.controls.zipcode.value;

    if (!zipcode) {
      form.controls.zipcode.setErrors({
        required: true
      });
      return;
    }

    form.reset();
    this.router.navigate(['/checkout', {zipcode}]);
  }
}
