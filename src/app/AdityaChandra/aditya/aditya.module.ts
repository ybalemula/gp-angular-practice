import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AdityaRootComponent } from './aditya.component';
import { AdityaFormComponent } from './form/form.component';
import { AdityaTableComponent } from './table/table.component';
import { AdityaRoutingModule } from './aditya-routing.module';

@NgModule({
  declarations: [
    AdityaRootComponent,
    AdityaFormComponent,
    AdityaTableComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, AdityaRoutingModule],
  exports: [RouterModule],
})
export class AdityaModule {}
