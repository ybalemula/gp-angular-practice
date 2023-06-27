import { Component, ViewChild, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { JsonApiService } from '../json-api.service';

@Component({
  selector: 'app-aditya-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class AdityaFormComponent {
  Form: FormGroup;
  editID: number | boolean = false;
  constructor(private jsonApiService: JsonApiService) {
    this.Form = new FormGroup({
      employeeName: new FormControl('', Validators.required),
      employeeSalary: new FormControl('', [Validators.required]),
      joinedDate: new FormControl('', Validators.required),
      contactNo: new FormControl('', Validators.required),
      emailID: new FormControl('', [Validators.required, Validators.email]),
      jobRole: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {
    this.jsonApiService.receiveEmployee().subscribe((data) => {
      console.log(data);
      this.editID = data.id;
      this.Form.setValue({
        employeeName: data.employeeName,
        employeeSalary: data.employeeSalary,
        joinedDate: data.joinedDate,
        contactNo: data.contactNo,
        emailID: data.emailID,
        jobRole: data.jobRole,
      });
    });
  }

  SaveOrUpdate() {
    if (this.editID) {
      this.jsonApiService
        .updateEmployee(+this.editID, this.Form.value)
        .subscribe((data) => {
          this.jsonApiService.getLatestList();
          this.Form.reset();
        });
    } else {
      this.jsonApiService.createEmployee(this.Form.value).subscribe((data) => {
        this.jsonApiService.getLatestList();
        this.Form.reset();
      });
    }
  }
  Cancel() {
    this.editID = false;
    this.Form.reset();
  }
}
