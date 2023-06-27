import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AdityaRootComponent } from './aditya.component';
import { AdityaFormComponent } from './form/form.component';
import { AdityaTableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: 'aditya/CRUD',
    component: AdityaRootComponent,
  },
];

@NgModule({
  declarations: [
    AdityaRootComponent,
    AdityaFormComponent,
    AdityaTableComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class AdityaModule {}
