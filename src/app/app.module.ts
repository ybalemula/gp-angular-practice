import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { YadagiriTestComponent } from './b-yadagiri/yadagiri-test/yadagiri-test.component';
import { LoginComponent } from './Navya-P/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './Navya-P/home-page/home-page.component';
import { NavyaDashboardComponent } from './Navya-P/dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { TokeninterceptorService } from './Navya-P/tokeninterceptor.service';
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
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MohammadDashboardComponent } from './Mohammad/mohammad/MohammadDashboard/mohammad-dashboard/mohammad-dashboard.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UsersComponent } from './Mohammad/users/users/users.component';
import { ChildComponent } from './Mohammad/Child/child/child.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MaheshReddyModule } from './maheshreddy/maheshreddy.module';
import { MaterialModule } from './material.module';
import { MaheshReddyRoutingModule } from './maheshreddy/maheshreddy-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    YadagiriTestComponent,
    LoginComponent,
    HomePageComponent,
    DashboardComponent,
    MohammadComponent,
    SandeepTestComponent,
    NavyaDashboardComponent,
    MohammadDashboardComponent,
    UsersComponent,
    ChildComponent,
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
    MatExpansionModule,
    MatTooltipModule,
    MatPaginatorModule,
    MaheshReddyModule,
    MaterialModule,
    MaheshReddyRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokeninterceptorService,
      multi: true,
    },
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
