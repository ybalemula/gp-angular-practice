import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MohammadComponent } from './Mohammad/mohammad/mohammad.component';
import { MaheshLoginComponent } from './maheshreddy/mahesh-login/mahesh-login.component';
const routes: Routes = [
  {
    path:'',
    component:AppComponent,
    children:[
      {
        path:'',
        component:MohammadComponent
      }
    ]
  },
  {
    path:'mahesh',
    component:MaheshLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
