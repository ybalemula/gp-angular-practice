import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Navya-P/login/login.component';
import { HomePageComponent } from './Navya-P/home-page/home-page.component';
import { DashboardComponent } from './Navya-P/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomePageComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
