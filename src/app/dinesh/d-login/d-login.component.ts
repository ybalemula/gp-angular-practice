import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-d-login',
  templateUrl: './d-login.component.html',
  styleUrls: ['./d-login.component.scss']
})
export class DLoginComponent {
  userDetails:FormGroup;
  constructor(){
    this.userDetails = new FormGroup({
      firstname:new FormControl('',[Validators.required]),  
      lastname:new FormControl('',[Validators.required]),
      place:new FormControl('',[Validators.required])
   })
  }

  submit1(){
    console.log(this.userDetails)
  }
}
