import { NgModule } from '@angular/core';

import {  RouterModule, Routes } from '@angular/router';
import { DLoginComponent } from './d-login/d-login.component';
import { SignupComponent } from './signup/signup.component';

const routes:Routes = [
  {path:'login',component:DLoginComponent},
  {path:'signup',component:SignupComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class DineshRoutingModule { }
