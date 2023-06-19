import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { YadagiriTestComponent } from './b-yadagiri/yadagiri-test/yadagiri-test.component';
import { MaheshLoginComponent } from './maheshreddy/mahesh-login/mahesh-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import{MatButtonModule}from '@angular/material/button';
import{MatDialogModule}from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import{LoginService}from 'src/app/maheshreddy/services/login.service';
import { HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule } from '@angular/forms';
import { MohammadComponent } from './Mohammad/mohammad/mohammad.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {LoginpageService} from './loginpage.service';
import {ReactiveFormsModule} from '@angular/forms';
import { SandeepTestComponent } from './g-sandeep/sandeep-test/sandeep-test.component'

@NgModule({
  declarations: [
    AppComponent,
    YadagiriTestComponent,
    MaheshLoginComponent,
    MohammadComponent,
    SandeepTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [LoginService],
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [LoginpageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
