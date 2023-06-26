import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaheshLoginComponent } from './components/mahesh-login/mahesh-login.component';
import { MaheshdashboardComponent } from './components/maheshdashboard/maheshdashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [MaheshLoginComponent, MaheshdashboardComponent],
  imports: [ReactiveFormsModule, CommonModule, MaterialModule],
})
export class MaheshReddyModule {}
