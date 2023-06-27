import { Component } from '@angular/core';
import { Employee, JsonApiService } from '../json-api.service';

@Component({
  selector: 'app-aditya-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class AdityaTableComponent {
  EmployeeList: Employee[] = [];
  constructor(private jsonApiService: JsonApiService) {
    this.jsonApiService.getLatestList();
    this.jsonApiService.receiveListEmployee().subscribe((data) => {
      this.EmployeeList = data;
    });
  }

  edit(index: number) {
    this.jsonApiService.getEmployee(index).subscribe((data) => {
      this.jsonApiService.sendEmployee(data);
    });
  }
  delete(index: number) {
    this.jsonApiService.deleteEmployee(index).subscribe((data) => {
      this.jsonApiService.getLatestList();
    });
  }
}
