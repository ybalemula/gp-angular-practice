import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CrudservisesService } from '../crudservises.service';

@Component({
  selector: 'app-naresh',
  templateUrl: './naresh.component.html',
  styleUrls: ['./naresh.component.scss']
})
export class NareshComponent {
  constructor(public data:CrudservisesService){}

  show:boolean=false;
  emptotdata:any;
  idd:number|null=null;
  btnname:string="";
 ngOnInit(){
this.get()
 }
 dataobj:any=new FormGroup({
  name:new FormControl([Validators.required,Validators.max]),
  gender:new FormControl(),
  loaction:new FormControl(),
  cellnumber:new FormControl()
})
get(){
  let obj:any={
    type:"Get"
  }
  this.data.cruddata(obj).subscribe(
    (res:any)=>{
      this.emptotdata=JSON.parse(res) ;
    },(err)=>{
      console.log(err);
    }
  )
}
//Insert && Update Functinality 
Insert(){
//update functinality
if(this.idd!=0){
  this.dataobj.value.type="update";
  this.dataobj.value.id=this.idd;
  this.data.cruddata(this.dataobj.value).subscribe(
    (res)=>{
alert("Updated Sucsses Fully");
this.idd=0;
this.dataobj.reset();
this.show=false;
this.get();
    }
  )
}
  else{
  this.dataobj.value.type="Insert";
 this.data.cruddata(this.dataobj.value).subscribe(
  (res)=>{
    alert("insert Sucsses Fully");
    this.dataobj.reset();
    this.get();

   
  },(err)=>{
    console.log(err);
  }
 )
}

}
deletee(id:number){
let obj:any={
  type:"Delete",
  id:id
}
this.data.cruddata(obj).subscribe(
  (res)=>{
    alert("delete record sucsses fully");
    this.get();
  },(err)=>{
    console.log(err);
  }
)
}
edit(editobj:any){
  this.btnname="Update"
  this.show=true;
  this.idd=editobj.id;
  let eobj:any={
    name:editobj.name,
    gender:editobj.gender,
    loaction:editobj.loaction,
    cellnumber:editobj.cellnumber
  }
  this.dataobj.setValue(eobj) 
}
add(){
this.show=true;
this.btnname="Insert"
}
cancel(){
  this.show=false;
}

}
