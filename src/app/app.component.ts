import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaheshLoginComponent } from './maheshreddy/mahesh-login/mahesh-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gp-angular-practice';
  constructor(private _dialog: MatDialog) {}
  openlogin() {
    this._dialog.open(MaheshLoginComponent);
  }
  opened=false;
}
