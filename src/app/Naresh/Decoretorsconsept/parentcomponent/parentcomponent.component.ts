import { Component,OnInit } from '@angular/core';
import { CrudservisesService } from '../../crudservises.service';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.scss']
})
export class ParentcomponentComponent {
constructor(public prodata:CrudservisesService){}
prodoctsdata:any;
chaldata:any;
ngOnInit(){

}
public sendatatochaild(){
  this.prodoctsdata= this.prodata.getprodoctsdata()
  
}
public getdatafromchaild(e:any){
this.chaldata=e.products;
}

}
