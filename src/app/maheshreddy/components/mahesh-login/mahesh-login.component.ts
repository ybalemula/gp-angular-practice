import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-mahesh-login',
  templateUrl: './mahesh-login.component.html',
  styleUrls: ['./mahesh-login.component.scss'],
})
export class MaheshLoginComponent implements OnInit {
  value: any;
  hide = true;
  loginform!: FormGroup;
  userdata: {} = {};
  constructor(
    private _loginserve: LoginService,
    private _fb: FormBuilder,
    private _route: Router
  ) {
    this.loginform = this._fb.group({
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
  //  , Validators.email
  login() {
    if (this.loginform) {
      let obj = {
        username: this.loginform.value.email,
        password: this.loginform.value.password,
      };
      this._loginserve.logindetails(obj).subscribe((res) => {
        this.userdata = res;
        if (res.isAuthenticated == false) {
          alert('pls enter valide login detaila');
        } else {
          alert('login sucessfull');
          this._route.navigateByUrl('maheshdasboard');
        }
      });
    } else {
      alert('please enter valid details');
    }
  }
}
