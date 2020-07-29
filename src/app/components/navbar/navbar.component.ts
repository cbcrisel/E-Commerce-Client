import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Constants } from '../../Constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  goToHome(){
    this.router.navigate([Constants.ROUTE_HOME]);
  }
  goToProducts(){
    this.router.navigate([Constants.ROUTE_PRODUCTS]);
  }
  goToCart(){
    this.router.navigate([Constants.ROUTE_CART]);
  }
}
