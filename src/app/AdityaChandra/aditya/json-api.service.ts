import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonApiService {
  employeeData = new Subject<Employee>();
  employeeListData = new Subject<Employee[]>();
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000';

  getEmployees() {
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`);
  }

  getEmployee(id: number) {
    return this.http.get<Employee>(`${this.baseUrl}/employees/${id}`);
  }

  createEmployee(employee: Employee) {
    return this.http.post<any>(`${this.baseUrl}/employees`, employee);
  }

  updateEmployee(id: number, employee: Employee) {
    return this.http.put<Employee>(`${this.baseUrl}/employees/${id}`, employee);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.baseUrl}/employees/${id}`);
  }
  sendEmployee(emp: Employee) {
    return this.employeeData.next(emp);
  }
  receiveEmployee(): Observable<Employee> {
    return this.employeeData.asObservable();
  }
  sendListEmployee(empList: Employee[]) {
    return this.employeeListData.next(empList);
  }
  receiveListEmployee(): Observable<Employee[]> {
    return this.employeeListData.asObservable();
  }

  getLatestList() {
    this.http.get<Employee[]>(`${this.baseUrl}/employees`).subscribe((data) => {
      this.employeeListData.next(data);
    });
  }
}
export interface Employee {
  id: number;
  employeeName: string;
  employeeSalary: number;
  joinedDate: string;
  contactNo: number;
  emailID: string;
  jobRole: string;
}
