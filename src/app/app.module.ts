import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YadagiriTestComponent } from './b-yadagiri/yadagiri-test/yadagiri-test.component';
import { LoginComponent } from './Navya-P/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './Navya-P/home-page/home-page.component';
import { DashboardComponent } from './Navya-P/dashboard/dashboard.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { TokeninterceptorService } from './Navya-P/tokeninterceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    YadagiriTestComponent,
    LoginComponent,
    HomePageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatTableModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokeninterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
