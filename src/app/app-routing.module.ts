import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Navya-P/login/login.component';
import { HomePageComponent } from './Navya-P/home-page/home-page.component';
import { NavyaDashboardComponent } from './Navya-P/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { MohammadComponent } from './Mohammad/mohammad/mohammad.component';
import { MaheshLoginComponent } from './maheshreddy/mahesh-login/mahesh-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { YadagiriTestComponent } from './b-yadagiri/yadagiri-test/yadagiri-test.component';

import { MaheshdashboardComponent } from './maheshreddy/maheshdashboard/maheshdashboard.component';
import { MohammadDashboardComponent } from './Mohammad/mohammad/MohammadDashboard/mohammad-dashboard/mohammad-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'yadagiri',
    component: YadagiriTestComponent,
  },
  {
    path: 'mohammad',
    component: MohammadComponent,
  },
  {
    path: 'mahesh',
    component: MaheshLoginComponent,
  },
  {
    path: 'mohammaddashboard',
    component: MohammadDashboardComponent,
  },
  {
    path: 'maheshdasboard',
    component: MaheshdashboardComponent,
  },
  { path: 'navya', component: NavyaDashboardComponent },
  { path: 'nvayalogin', component: LoginComponent },
  { path: 'navyahome', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
