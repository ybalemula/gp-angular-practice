import { Component,OnInit } from '@angular/core';
import { CrudservisesService } from '../../crudservises.service';




@Component({
  selector: 'app-dropdowncomponent',
  templateUrl: './dropdowncomponent.component.html',
  styleUrls: ['./dropdowncomponent.component.scss']
})
export class DropdowncomponentComponent {
constructor(private arrylist:CrudservisesService){}
  fname:string="";
  sname:string="";
  gender:string="";
  Contryid:number=0;
  stateid:number=0;
  cityid:number=0;
  contrylist:any;
  statelist:any;
  citylist:any;
  totalarray:any[]=[];
 

  ngOnInit(){
this.cuntryfun();
  }
  cuntryfun(){
    this.statelist=""
   this.contrylist= this.arrylist.contryfun()
  }
  //contry drop down change
  contrychange(e:number){
    let stat=this.arrylist.statefun()
this.statelist=stat.filter(sfun)
function sfun(element:any,index:any,arry:any){
 if(element.cid==e){ return arry[index]}
 }
}
//state dropdown change 
statechange(e:number){
  let cit=this.arrylist.cityfun();
  this.citylist=cit.filter(cfun)
  function cfun(element:any,index:any,arry:any){
    if(element.sid==e){ return arry[index]}
  }
}
registretion(){
this.totalarray.push({"fname":this.fname,"sname":this.sname,"gender":this.gender,"cuntry":this.Contryid,"state":this.stateid,"city":this.cityid})
  console.log(this.totalarray);
}



}
