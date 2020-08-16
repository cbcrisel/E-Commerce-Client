import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';
import { NgForm } from '@angular/forms';
import { Constants } from '../../Constants';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:any[];
  totalPrice:number;
  constructor(
    private router:Router,
    private _cartService:CartService
  ) { 
    this.products=[];
    this.totalPrice=0;
  }

  ngOnInit() {
    this.getCart();
  }
  getCart(){
    this._cartService.getCart().subscribe(
      Response=>{
        this.products=Response;
        console.log(Response);
      }
    )
    this._cartService.getTotal().subscribe(
      Response=>{
        this.totalPrice=Response;
      }
    )
  }
  delete(productId){
    console.log(productId);
    this._cartService.delete(productId).subscribe(
      Response=>{
        console.log(Response);
        this.getCart();
      }
    )
  }
  onPay(forma:NgForm){
    console.log(forma.value);
  }
  goToPayment(){
    this.router.navigate([Constants.ROUTE_PAYMENT]);
  }
}
