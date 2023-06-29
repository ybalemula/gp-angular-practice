import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PranayRoutingModule } from './pranay-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from '../home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegisterComponent } from '../register/register.component';
import { PracticeComponent } from '../practice/practice.component';
import { LoginComponent } from '../login/login.component';
import { AngularpracticeComponent } from '../angularpractice/angularpractice.component';


@NgModule({
  declarations: [HomeComponent,LoginComponent,RegisterComponent,PracticeComponent,AngularpracticeComponent],
  imports: [
    CommonModule,
    PranayRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService]
})
export class PranayModule { }


