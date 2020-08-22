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
  cartEmpty:boolean;
  message;
  products:any[];
  totalPrice:number;
  constructor(
    private router:Router,
    private _cartService:CartService
  ) { 
    this.cartEmpty=false;
    this.products=[];
    this.totalPrice=0;
    this.message='';
  }

  ngOnInit() {
    this.getCart();
  }
  getCart(){
    this._cartService.getCart().subscribe(
      Response=>{
        if(Response=='Su carrito se encuentra vacio'){
          console.log(Response);
          this.cartEmpty=true;
          this.message=Response;
        }else{
        this.products=Response;
        console.log(this.products);
        this._cartService.getTotal().subscribe(
          Response=>{
            this.totalPrice=Response;
          }
        )
        }
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
