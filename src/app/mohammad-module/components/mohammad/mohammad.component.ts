import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginpageService } from 'src/app/loginpage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mohammad',
  templateUrl: './mohammad.component.html',
  styleUrls: ['./mohammad.component.scss']
})
export class MohammadComponent implements OnInit {
  LoginPage !: FormGroup;
  Issubmitted: boolean = false;
  userdata: {} = {};
  Showerror: boolean = false;
  constructor(private _loginservice: LoginpageService,  private router: Router) { }
  ngOnInit() {
    this.LoginPage = new FormGroup({
      Username: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
  Login() {
    if (this.LoginPage.valid) {
      let obj = {
        UserName: this.LoginPage.value.Username,
        Password: this.LoginPage.value.Password,
      }
      this._loginservice.login(obj).subscribe(
        (res) => {
          if (res.token) {
            this.userdata = res;
            this.router.navigate(['mohammad/dashboard']);
            this.Showerror = false;
          }
          else {
            this.Showerror = true;
          }

        }
      )
    }
    else {
      alert("Please Enter Details");
    }
  }

}
