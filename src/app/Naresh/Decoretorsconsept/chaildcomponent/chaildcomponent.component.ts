import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { CrudservisesService } from '../../crudservises.service';

@Component({
  selector: 'app-chaildcomponent',
  templateUrl: './chaildcomponent.component.html',
  styleUrls: ['./chaildcomponent.component.scss']
})
export class ChaildcomponentComponent {
constructor(public parentdataserve:CrudservisesService){}
show:boolean=true;
chailddataa:any;
@Input() public parentdata:any;
@Output() public chailddata:EventEmitter<any>=new EventEmitter<any>()
ngOnInit(){
  
}
 public chaildtoparent(){
this.parentdataserve.getdatachaildtoparent().subscribe(
  (res:any)=>{
   //this.chailddata=res;
   this.chailddata.emit(res);
  },(err)=>{
    console.log(err);
  }
)
}
}
