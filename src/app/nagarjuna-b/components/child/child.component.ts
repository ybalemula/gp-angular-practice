import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  
  @Input() public Electronicscount:number=0;
  @Input() public Jewelerycount:number=0;
  @Input() public MensClothingcount:number=0;
  @Input() public WomensClothingcount:number=0;
  @Output() public Filterclicked:EventEmitter<string>=new EventEmitter<string>();
  @Output() public Filterchange:EventEmitter<string>=new EventEmitter<string>();
  public Buttonclicked(e:any)
  {
    this.Filterclicked.emit(e.target.name);
  }
  public Filterchanged(e:any)
  {
    this.Filterchange.emit(e.target.value);
  }

}
