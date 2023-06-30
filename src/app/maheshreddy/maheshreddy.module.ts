import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaheshLoginComponent } from './components/mahesh-login/mahesh-login.component';
import { MaheshdashboardComponent } from './components/maheshdashboard/maheshdashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { CounterComponent } from './components/countersexample/counter/counter.component';
import { CounterOutputComponent } from './components/countersexample/counter-output/counter-output.component';
import { CounterButtonsComponent } from './components/countersexample/counter-buttons/counter-buttons.component';

@NgModule({
  declarations: [MaheshLoginComponent, MaheshdashboardComponent, CounterComponent, CounterOutputComponent, CounterButtonsComponent],
  imports: [ReactiveFormsModule, CommonModule, MaterialModule],
})
export class MaheshReddyModule {}
