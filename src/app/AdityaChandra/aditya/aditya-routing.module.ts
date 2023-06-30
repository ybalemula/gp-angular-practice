import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdityaRootComponent } from './aditya.component';

const routes: Routes = [
  {
    path: 'aditya/CRUD',
    component: AdityaRootComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdityaRoutingModule {}
