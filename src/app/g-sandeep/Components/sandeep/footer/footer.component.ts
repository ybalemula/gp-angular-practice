import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  name : string = "All Rights Reserved"
  loginLink: string = "/login"
  Logout: string = " logout"
}
