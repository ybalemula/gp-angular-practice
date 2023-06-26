import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaheshLoginComponent } from '../maheshreddy/components/mahesh-login/mahesh-login.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  title = 'gp-angular-practice';
  constructor(private _dialog: MatDialog) {}
  openlogin() {
    this._dialog.open(MaheshLoginComponent);
  }
}
