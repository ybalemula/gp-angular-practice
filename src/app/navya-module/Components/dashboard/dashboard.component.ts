import { Component,OnInit,ViewChild} from '@angular/core';
import { DashboardServiceService } from '../../services/dashboard-service/dashboard-service.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';

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

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

constructor(private ds:DashboardServiceService,private router:Router){};

ngOnInit(): void {
  this.GetMenus();
}
GetMenus(){
  this.ds.getmenusData().subscribe(
    (res) => {
      console.log(res);
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.sort= this.sort;
     this.dataSource.paginator=this.paginator;
    // this.router.navigate(['/navyahome']);
    },
    (err) => {
      console.log(err);
    }
  );
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
HomeData(){
      this.router.navigate(['/navyahome']);
}
}
