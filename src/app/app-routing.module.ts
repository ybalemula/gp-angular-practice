import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MohammadComponent } from './Mohammad/mohammad/mohammad.component';
import { MaheshLoginComponent } from './maheshreddy/mahesh-login/mahesh-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { YadagiriTestComponent } from './b-yadagiri/yadagiri-test/yadagiri-test.component';
import { MaheshdashboardComponent } from './maheshreddy/maheshdashboard/maheshdashboard.component';
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
    path:'maheshdasboard',
    component:MaheshdashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
