import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YadagiriTestComponent } from './b-yadagiri/yadagiri-test/yadagiri-test.component';
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
    MohammadComponent,
    SandeepTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
