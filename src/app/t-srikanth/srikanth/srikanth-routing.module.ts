import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRegistrationComponent } from '../components/create-registration/create-registration.component';

const routes: Routes = [

  {
    path: 'srikantH/create-registration',
    component: CreateRegistrationComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SrikanthRoutingModule { }
