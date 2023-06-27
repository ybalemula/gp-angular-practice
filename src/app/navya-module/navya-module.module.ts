import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavyaDashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { TokeninterceptorService } from './services/Token-interceptor/tokeninterceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { NavyaModuleRoutingModule } from './navya-module-routing.module';
import { UsersDataComponent } from './Components/users-data/users-data.component';


@NgModule({
  declarations: [
    NavyaDashboardComponent,
    LoginComponent,
    HomePageComponent,
    UsersDataComponent
  ],
  imports: [
    CommonModule,
    NavyaModuleRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokeninterceptorService,
      multi: true,
    },
  ]
})
export class NavyaModuleModule { }
