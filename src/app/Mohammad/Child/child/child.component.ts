import { Component, Input, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() ChildData: any = {};
  @Output() editdataevent = new EventEmitter<any>()
  displayedColumns: string[] = ['FirstName', 'LastName', 'Gender', 'Role', 'Country', 'State', 'City', 'Mobile', 'Address', 'Actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  RececiveData: any = {};
  ListedArray: any[] = [];
  visiable: boolean = false;
  constructor() { }
  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.ListedArray);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {

  }
  updateData(obj: any) {
    this.ListedArray.push(obj);
    this.ngAfterViewInit();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
