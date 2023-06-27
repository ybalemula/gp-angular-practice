import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MohammadModuleRoutingModule } from './mohammad-module-routing.module';
import {ChildComponent} from './components/Child/child/child.component';
import {UsersComponent} from './components/users/users/users.component';
import{MohammadComponent} from './components/mohammad/mohammad.component';
import{MohammadDashboardComponent} from './components/mohammad/MohammadDashboard/mohammad-dashboard/mohammad-dashboard.component'
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import{MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginpageService } from 'src/app/loginpage.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ChildComponent,UsersComponent,MohammadComponent,MohammadDashboardComponent],
  imports: [
    CommonModule,
    MohammadModuleRoutingModule,
    ReactiveFormsModule,
    MaterialModule,MatIconModule,MatMenuModule,MatButtonModule,MatBadgeModule,
    MatSidenavModule,
    FormsModule
  ],
 
})
export class MohammadModuleModule { }
