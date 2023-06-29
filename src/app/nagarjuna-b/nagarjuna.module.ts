import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NagarjunaRoutingModule } from './nagarjuna-routing.module';
import { ChildComponent } from './components/child/child.component';
import { ShoppingComponent } from './components/shopping/shopping.component';


@NgModule({
  declarations: [
    
    ShoppingComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    NagarjunaRoutingModule
  ]
})
export class NagarjunaModule { }
