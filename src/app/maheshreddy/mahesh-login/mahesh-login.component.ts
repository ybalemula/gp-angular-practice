import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import{LoginService}from 'src/app/maheshreddy/services/login.service';
import {ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mahesh-login',
  templateUrl: './mahesh-login.component.html',
  styleUrls: ['./mahesh-login.component.scss']

})
export class MaheshLoginComponent implements OnInit {
  value:any;
  hide = true;
  loginform!:FormGroup;
  userdata:{}={}
  constructor( private _loginserve:LoginService,private _fb:FormBuilder){
    this.loginform=this._fb.group({
      email:'',
      password:''
    })
  }
 
 ngOnInit(): void {
 this.loginform = new FormGroup({
    email :new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
   })
 }
//  , Validators.email
  login()
  {
  if(this.loginform)
  {
    let obj={
      username:this.loginform.value.email,
      password:this.loginform.value.password,
    }
    this._loginserve.logindetails(obj).subscribe(
      (res)=>
      {
        this.userdata=res;
      }
    )
  }  
  else 
  {
    alert("please enter details");
  }
  }
    }
