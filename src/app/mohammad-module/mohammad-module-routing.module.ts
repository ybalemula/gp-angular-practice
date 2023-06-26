import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MohammadComponent,MohammadDashboardComponent,UsersComponent,ChildComponent} from './index'
const routes: Routes = [
  {
    path: 'mohammad/component',
    component: MohammadComponent,
  },
  {
    path: 'mohammad/dashboard',
    component: MohammadDashboardComponent,
  },
  {
    path: 'mohammad/user',
    component: UsersComponent,
  },
  {
    path: 'mohammad/child',
    component: ChildComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MohammadModuleRoutingModule { }
