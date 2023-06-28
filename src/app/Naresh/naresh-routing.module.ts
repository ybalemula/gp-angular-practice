import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NareshComponent } from './naresh/naresh.component';


const routes: Routes = [{
  path: 'Naresh',
    component: NareshComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NareshRoutingModule { }
