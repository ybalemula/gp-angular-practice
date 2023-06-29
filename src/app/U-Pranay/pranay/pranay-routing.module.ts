import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PracticeComponent } from '../practice/practice.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { AngularpracticeComponent } from '../angularpractice/angularpractice.component';

const routes: Routes = 
[
{path:'',component:HomeComponent},
  {
    path: 'pranayhome',component: HomeComponent,
  children:[
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'practice',component:PracticeComponent}]},

  {path:'ngpractice',component:AngularpracticeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PranayRoutingModule { }
