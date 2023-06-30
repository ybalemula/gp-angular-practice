import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public r: Router) {

  }
  registerForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })
  submitted = false
  get f() { return this.registerForm.controls }
  login(): void {
    if ((this.registerForm.controls.email.untouched && this.registerForm.controls.email.invalid)
      || (this.registerForm.controls.password.untouched && this.registerForm.controls.password.invalid)) {
      this.submitted = true
    }
    else if ((this.registerForm.controls.email.touched && this.registerForm.controls.email.invalid)
      || (this.registerForm.controls.password.touched && this.registerForm.controls.password.invalid)) {
      this.submitted = true
    }
    else {
      this.r.navigate(['/Sandeep/dashboard'])
    }
  }
}
