import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaheshLoginComponent } from './maheshreddy/mahesh-login/mahesh-login.component';


const routes: Routes = [
  {
    path:'http://hyd.gpinfotech.com/GPSuiteAPI/swagger/ui/index#!/Auth/Auth_Login',
    component:MaheshLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
