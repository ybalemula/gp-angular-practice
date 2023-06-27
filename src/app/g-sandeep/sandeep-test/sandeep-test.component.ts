import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sandeep-test',
  templateUrl: './sandeep-test.component.html',
  styleUrls: ['./sandeep-test.component.scss']
})
export class SandeepTestComponent {
  submitted = false
  constructor(public r: Router) {

  }
  registerForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })
  login(): void {
    if ((this.registerForm.controls.email.untouched && this.registerForm.controls.email.invalid)
      || (this.registerForm.controls.password.untouched && this.registerForm.controls.password.invalid)) {
      this.submitted = true
    }
    else if((this.registerForm.controls.email.touched && this.registerForm.controls.email.invalid)
    || (this.registerForm.controls.password.touched && this.registerForm.controls.password.invalid)){
      this.submitted = true
    }
    else {
      this.r.navigate(['/'])
    }
  }
}

