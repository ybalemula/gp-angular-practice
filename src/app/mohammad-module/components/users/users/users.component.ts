import { Component,OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import{ChildComponent} from 'src/app/mohammad-module/components/Child/child/child.component';
import {DataserviceService} from 'src/app/mohammad-module/Service/dataservice.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  title='Users Form'
  ParentData: any = {};
  DataList:any[]=[];
  @ViewChild(ChildComponent) ViewData!: ChildComponent
  constructor(private dataService:DataserviceService) { }
  UserprofileForm = new FormGroup({
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    Gender: new FormControl('', Validators.required),
    Role: new FormControl('', Validators.required),
    Country: new FormControl('', Validators.required),
    State: new FormControl('', Validators.required),
    City: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    Mobile: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    Address: new FormControl('', Validators.required)
  });
  Roles = [{
    id: 101,
    name: "Developer"
  }, {
    id: 102,
    name: "Designer"
  }, {
    id: 103,
    name: "Tester"
  }, {
    id: 104,
    name: "Manager"
  }, {
    id: 105,
    name: "Admin"
  }];
  Country: any[] = [{
    conid: 501,
    name: 'India'
  },
  {
    conid: 502,
    name: 'USA'
  }];

  States: any[] = [{ stid: 601, name: "Telangana", conid: 501 },
  { stid: 602, name: "Andhra Pradesh", conid: 501 },
  { stid: 603, name: "California", conid: 502 },
  { stid: 604, name: "Florida", conid: 502 }];
  Cities: any[] = [{ cityid: 701, name: "Hyderabad", stid: 601 },
  { cityid: 702, name: "Warangal", stid: 601 },
  { cityid: 703, name: "Vishakapatanam", stid: 602 },
  { cityid: 704, name: "Vijayawada", stid: 602 },
  { cityid: 705, name: "San Fransisco", stid: 603 },
  { cityid: 706, name: "Los Angles", stid: 603 },
  { cityid: 707, name: "Miami", stid: 604 },
  { cityid: 708, name: "Orlando", stid: 604 },];

  state: any[] = [];
  city: any[] = [];
  Selectstate(data: any) {
    this.state = this.States.filter(x => x.conid == data);
  }
  selectcity(arg: any) {
    this.city = this.Cities.filter(x => x.stid == arg);
  }

  Submit() {
    this.ParentData = this.UserprofileForm.value;
    this.ViewData.updateData(this.ParentData);
    this.DataList.push(this.ParentData);
    this.UserprofileForm.reset();
  }
editdata(data:any){
  var filterdata:any=this.DataList.filter(x=>x.FirstName==data);
 // this.UserprofileForm=filterdata[0];
  this.UserprofileForm.value.FirstName=filterdata[0].FirstName;
  this.UserprofileForm.value.LastName=filterdata[0].LastName;
  this.UserprofileForm.value.Gender=filterdata[0].Gender;
  this.UserprofileForm.value.Role=filterdata[0].Role;
  this.UserprofileForm.value.Country=filterdata[0].Country;
  this.UserprofileForm.value.State=filterdata[0].State;
  this.UserprofileForm.value.City=filterdata[0].City;
  this.UserprofileForm.value.Email=filterdata[0].Email;
  this.UserprofileForm.value.Mobile=filterdata[0].Mobile;
  this.UserprofileForm.value.Address=filterdata[0].Address;
}
}
