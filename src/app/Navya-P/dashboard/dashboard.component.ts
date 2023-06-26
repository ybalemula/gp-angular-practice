import { Component,OnInit} from '@angular/core';
import { DashboardServiceService } from '../dashboard-service.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class NavyaDashboardComponent implements OnInit{
  displayedColumns: string[] = [
    'menuId',
    'moduleName',
    'menuTitle',
    'moduleId'
  ]
  dataSource!: MatTableDataSource<any>;

constructor(private ds:DashboardServiceService){};

ngOnInit(): void {
  this.GetMenus();
}
GetMenus(){
  this.ds.getmenusData().subscribe(
    (res) => {
      this.dataSource=new MatTableDataSource(res);
    },
    (err) => {
      console.log(err);
    }
  );
}
}
