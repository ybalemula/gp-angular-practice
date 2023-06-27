import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DLoginComponent } from './d-login/d-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DineshModule { }
