import { Component } from '@angular/core';

@Component({
  selector: 'app-angularpractice',
  templateUrl: './angularpractice.component.html',
  styleUrls: ['./angularpractice.component.scss']
})
export class AngularpracticeComponent 
{
   minDate='2023-06-26';
   maxDate='2023-06-27';
   selectedDate:any='yyyy-mm-dd';


   startdate:any;
   enddate:any;
   totalDays:any=0;
   
  calculatedays()
  {
    const date1mod=new Date(this.startdate);
    const date2mod=new Date(this.enddate);
    const time=date2mod.getTime()-date1mod.getTime();
    this.totalDays=time/(1000*3600*24);
    console.log(this.totalDays);
  }
  
   constructor()
   {
     
   }
}
