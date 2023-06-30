import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NareshRoutingModule } from './naresh-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';
import { NareshComponent } from './naresh/naresh.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { ParentcomponentComponent } from './Decoretorsconsept/parentcomponent/parentcomponent.component';
import { ChaildcomponentComponent } from './Decoretorsconsept/chaildcomponent/chaildcomponent.component';
import { DropdowncomponentComponent } from './CascadingDropdown/dropdowncomponent/dropdowncomponent.component';

//import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { TokeninterceptorService } from './services/Token-interceptor/tokeninterceptor.service';
@NgModule({
  declarations: [
  NareshComponent,
  MaincomponentComponent,
  ParentcomponentComponent,
  ChaildcomponentComponent,
  DropdowncomponentComponent
  ],
  imports: [
    CommonModule,
    NareshRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ]})

export class NareshModule { }
