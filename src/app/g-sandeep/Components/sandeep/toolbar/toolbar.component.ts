import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  Logo: string = "Dashboard"
  Logout: string = " logout"
  home: string = "Home"
  products: string = "Products"
  contact: string = "Contact"
  about: string = "About"
  homeLink: string = "/Sandeep/home"
  productsLink: string = "/Sandeep/products"
  contactLink: string = "/Sandeep/contact"
  aboutLink: string = "/Sandeep/about"
  loginLink: string = "/Sandeep/login"
  dashBoardLink: string = "/Sandeep/dashboard"
}
