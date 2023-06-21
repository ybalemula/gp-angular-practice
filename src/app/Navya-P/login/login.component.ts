import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { LoginserviceService } from '../loginservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

      loginForm : FormGroup = new FormGroup(
        {
            userName : new FormControl(null,[Validators.required]),
            password : new FormControl(null,[Validators.required])
        }
      )

      Users:any=[];
      userName='';
      password='';
    
      constructor(private login:LoginserviceService,private http:HttpClient,private _fb:FormBuilder,private router:Router){};   

     ngOnInit(): void {
      this.loginForm = this._fb.group({
        userName:[''],
        password:[''],
       })

     }
     LoginUser(){
      this.userName=this.loginForm.value.userName;
      this.password=this.loginForm.value.passsword;
      if(!this.loginForm.valid){
        return;
      }
      this.login.LoginUseData(this.loginForm.value).subscribe(
        (res:any)=>{
          localStorage.setItem('token',res.token)
          // console.log(res.token);
          alert("User Login Sucessfully");
          this.loginForm.reset();
          this.router.navigate(['/dashboard']);
        },
        (err)=>{
          console.log(err);
          alert("Login Failed");
        }
      )
     }
}

