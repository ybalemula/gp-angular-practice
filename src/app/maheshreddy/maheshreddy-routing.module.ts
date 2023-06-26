import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaheshdashboardComponent, MaheshLoginComponent } from './index';

const routes: Routes = [
  {
    path: 'mahesh/dashboard',
    component: MaheshdashboardComponent,
  },
  {
    path: 'mahesh/login',
    component: MaheshLoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaheshReddyRoutingModule {}
