import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Navya-P/login/login.component';
import { HomePageComponent } from './Navya-P/home-page/home-page.component';
import { NavyaDashboardComponent } from './Navya-P/dashboard/dashboard.component';
import { MohammadComponent } from './Mohammad/mohammad/mohammad.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { YadagiriTestComponent } from './b-yadagiri/yadagiri-test/yadagiri-test.component';
import { MohammadDashboardComponent } from './Mohammad/mohammad/MohammadDashboard/mohammad-dashboard/mohammad-dashboard.component';
import{UsersComponent} from './Mohammad/users/users/users.component'
import { DLoginComponent } from './dinesh/d-login/d-login.component';

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
    path: "mahesh", loadChildren: () => import('./maheshreddy/maheshreddy.module').then(m => m.MaheshReddyModule),
  },
  {
    path: 'mohammad',
    component: MohammadComponent,
  },
  { path: 'navya', component: NavyaDashboardComponent },
  { path: 'nvayalogin', component: LoginComponent },
  { path: 'navyahome', component: HomePageComponent },
  { path: 'mohammadusers', component: UsersComponent },
  { path: 'Dinesh', component: DLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
