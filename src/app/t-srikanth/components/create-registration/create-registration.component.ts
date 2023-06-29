
import { ApiService } from '../../api.service'; 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.scss']
})
export class CreateRegistrationComponent implements OnInit {

  selectedGender!: string;
  Genders: string[] = ["Male", "Female"];
  Packages: string[] = ["Monthly", "Quarterly", "Yearly"];
  importantList: string[] = [
    "Toxic Fat reduction",
    "Energy and Endurance",
    "Building Lean Muscle",
    "Healthier Digestive System",
    "Sugar Craving Body",
    "Fitness"
  ]

  registerForm!: FormGroup;
  public useridToUpdate:any;
  public isUpdateActiveRnot:boolean=false; // it hold update status for to change button name from submit to update

  constructor(private fb: FormBuilder,private routr:Router, private activateRoute:ActivatedRoute, private apiServce:ApiService , private toastService: NgToastService, private activatedRoute: ActivatedRoute, private router: Router) {
  // Activated route here helps to store updated record id
  }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobileNo: [''],
      weight: [''],
      height: [''],
      bmi: [''],
      bmiResult: [''],
      gender: [''],
      requireTrainer: [''],
      package: [''],
      important: [''],
      haveGymBefore: [''],
      enquiryDate: ['']
    });
    this.registerForm.controls['height'].valueChanges.subscribe(res => {
      this.calculateBmi(res);
    });

    this.activateRoute.params.subscribe(val=>{   // here val holds updatedid
      this.useridToUpdate=val['id'];
      this.apiServce.getRegisteredUserById(this.useridToUpdate).subscribe(res=>{
        this.isUpdateActiveRnot=true;
        this.fillformToUpdate(res);
      })
    })
  }

  calculateBmi(value: number) {
    const weight = this.registerForm.value.weight; // weight in kilograms
    const height = value; // height in meters
    const bmi = weight / (height * height);
    this.registerForm.controls['bmi'].patchValue(bmi);
    switch (true) {
      case bmi < 18.5:
        this.registerForm.controls['bmiResult'].patchValue("Underweight");
        break;
      case (bmi >= 18.5 && bmi < 25):
        this.registerForm.controls['bmiResult'].patchValue("Normal");
        break;
      case (bmi >= 25 && bmi < 30):
        this.registerForm.controls['bmiResult'].patchValue("Overweight");
        break;

      default:
        this.registerForm.controls['bmiResult'].patchValue("Obese");
        break;
    }
  }
  submit() {
    this.apiServce.postRegistration(this.registerForm.value).subscribe(res => {
      alert("registration comptleted");
      this.toastService.success({     
        detail: 'SUCCESS', summary: 'Registration Successful', duration: 3000, type: 'error'
      });
       this.registerForm.reset();
      });
  }
  fillformToUpdate(user:User){
    this.registerForm.setValue(
      {
        firstName:user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobileNo: user.mobileNo,
        weight: user.weight,
        height: user.height,
        bmi: user.bmi,
        bmiResult: user.bmiResult,
        gender: user.gender,
        requireTrainer: user.requireTrainer,
        package: user.package,
        important: user.important,
        haveGymBefore: user.haveGymBefore,
        enquiryDate:user.enquiryDate
      }
    )
  }
  update(){
    this.apiServce.updateRegisteredUser(this.registerForm.value,this.useridToUpdate).subscribe(res => {
      alert("Updation comptleted");
      this.toastService.success({     
        detail: 'SUCCESS', summary: 'Updated Successfuly', duration: 3000, type: 'error'
      });
       this.registerForm.reset();
       this.routr.navigate(['list']);
      });
  }
}
