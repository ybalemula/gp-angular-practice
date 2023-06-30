import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRegistrationComponent } from '../components/create-registration/create-registration.component';
import { RegistrationListComponent } from '../components/registration-list/registration-list.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';

const routes: Routes = [

  {path: 'srikantH/create-registration',component: CreateRegistrationComponent},
  {path:'register', component:CreateRegistrationComponent},
  {path:'list', component:RegistrationListComponent},
  {path:'detail/:id', component:UserDetailComponent},
  {path:'update/:id',component:CreateRegistrationComponent}, 
  {path:'', redirectTo:'register', pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SrikanthRoutingModule { }
