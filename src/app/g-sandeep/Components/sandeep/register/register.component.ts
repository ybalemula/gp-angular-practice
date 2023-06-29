import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(public r: Router) {

  }
  obj = { name: '', email: '', password: '', Rpassword: '' }
  register() {
    if (this.obj.password != this.obj.Rpassword) {
      alert('password not matches')
    }
    else {
      this.r.navigate(['/Sandeep/login'])
    }
  }
}
