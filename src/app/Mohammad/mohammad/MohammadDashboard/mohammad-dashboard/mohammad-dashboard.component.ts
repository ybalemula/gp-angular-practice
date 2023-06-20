import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import{MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-mohammad-dashboard',
  templateUrl: './mohammad-dashboard.component.html',
  styleUrls: ['./mohammad-dashboard.component.scss']
})
export class MohammadDashboardComponent {
  opened=false;
}
