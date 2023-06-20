import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { YadagiriTestComponent } from './b-yadagiri/yadagiri-test/yadagiri-test.component';
import { MaheshLoginComponent } from './maheshreddy/mahesh-login/mahesh-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from 'src/app/maheshreddy/services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MohammadComponent } from './Mohammad/mohammad/mohammad.component';
import { MatCardModule } from '@angular/material/card';
import { LoginpageService } from './loginpage.service';
import { SandeepTestComponent } from './g-sandeep/sandeep-test/sandeep-test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatListModule } from '@angular/material/list';
import { MaheshdashboardComponent } from './maheshreddy/maheshdashboard/maheshdashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import { MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent,
    YadagiriTestComponent,
    MaheshLoginComponent,
    MohammadComponent,
    SandeepTestComponent,
    DashboardComponent,
    MaheshdashboardComponent,
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
    MatListModule,
    MatSidenavModule,
    MatDividerModule,
    MatBadgeModule,
    MatMenuModule,

  ],
  providers: [
    LoginService,
    LoginpageService,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatSidenavModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
