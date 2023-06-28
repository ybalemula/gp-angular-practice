import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SrikanthRoutingModule } from './srikanth/srikanth-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';


import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateRegistrationComponent } from './components/create-registration/create-registration.component';
import { RegistrationListComponent } from './components/registration-list/registration-list.component'; 
import { NgConfirmModule } from 'ng-confirm-box';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [
    UserDetailComponent,
    CreateRegistrationComponent,
    RegistrationListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    SrikanthRoutingModule,
    NgToastModule,
    NgConfirmModule,
    ReactiveFormsModule,
    MatToolbarModule,MatIconModule,MatButtonModule,MatFormFieldModule,MatInputModule,
    MatRadioModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatTableModule,
    HttpClientModule,MatPaginatorModule,MatSortModule,MatCardModule,MatListModule,MatChipsModule
  ]
})
export class SrikanthModule { }
