import { Component , OnInit ,ViewChild } from '@angular/core';
import { UserdataService } from '../../services/userdata-service/userdata.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort'; 
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss']
})
export class UsersDataComponent implements OnInit{

  UserForm! : FormGroup ;
  displayedColumns: string[] = [
    'userId',
    'userName',
    'firstName',
    'lastName',
    'email',
    'cell'
  ]
  
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

 constructor(private uds:UserdataService,private fb:FormBuilder,private _dialog:MatDialog ){}
 UserData:any=[];
 ngOnInit(): void {
  this.UserForm = this.fb.group({
    UserName:'',
    FirstName:'',
    LastName:'',
    Password:'',
    Gender:'',
    Email:'',
    Cell:'',
    CreatedBy:''
   })
   this.GetUsers();
 }

 GetUsers(){
  this.uds.getusersData().subscribe(
    (res)=>{
      console.log(res);
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.sort= this.sort;
      this.dataSource.paginator=this.paginator;
    },
    (err)=>{
      console.log(err);
    }
  )
 }
 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
onSubmit(){
  let entity={
  UserName : this.UserForm.value.UserName,
  FirstName : this.UserForm.value.FirstName,
  LastName : this.UserForm.value.LastName,
  Password:this.UserForm.value.Password,
  Gender : this.UserForm.value.Gender,
  Email : this.UserForm.value.Email,
  Cell : this.UserForm.value.Cell
 }
  this.uds.addUsersData(entity).subscribe(
    (res: any) => {
      console.log(res);
      alert("User Saved Sucessfully");
      this.UserForm.reset();
      this.GetUsers();
    },
    (err) => {
      console.log(err);
      alert("Error");
      this.UserForm.reset();
    }
  )
}
Clear(){
  this.UserForm.reset();}
}
