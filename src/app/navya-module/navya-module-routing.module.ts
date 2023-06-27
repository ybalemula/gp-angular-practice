import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NavyaDashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
  { 
    path: 'navya',
    component: NavyaDashboardComponent 
  },
  { 
    path: 'navyalogin',
    component: LoginComponent
  },
  {
     path: 'navyahome',
     component: HomePageComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavyaModuleRoutingModule { }
