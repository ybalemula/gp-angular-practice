import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { User } from '../../models/user.model'; 
import { MatSort } from '@angular/material/sort';
import { ApiService } from '../../api.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss']
})
export class RegistrationListComponent implements OnInit {
  public dataSource!:MatTableDataSource<User>;
  public users!:User[];

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns:string[]=["id","firstName","lastName","mobileNo","email","bmiResult","gender","package","enquiryDate","action"]
  constructor(private apiService:ApiService, private router:Router, private toast:NgToastService , private confirm:NgConfirmService){ }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.apiService.getRegisteredUser().subscribe(res=>{
      this.users=res;
      this.dataSource=new MatTableDataSource(this.users);
      this.paginator=this.paginator;
      this.sort=this.sort;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  edit(id:any){
    this.router.navigate(['update',id]);
  }
  deleteUser(id:any){
    this.apiService.deleteRegisterUser(id).subscribe(res=>{
      alert('Deleted ')
      this.getUsers();
    })
  }

}
