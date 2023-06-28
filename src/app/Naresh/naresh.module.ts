import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NareshRoutingModule } from './naresh-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';
import { NareshComponent } from './naresh/naresh.component';

//import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { TokeninterceptorService } from './services/Token-interceptor/tokeninterceptor.service';
@NgModule({
  declarations: [
  NareshComponent
  ],
  imports: [
    CommonModule,
    NareshRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ]})

export class NareshModule { }
