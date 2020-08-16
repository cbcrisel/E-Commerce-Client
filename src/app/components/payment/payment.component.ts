import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

declare var paypal:any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @ViewChild('paypal',{static:true}) paypalElement: ElementRef;
  totalPrice:number;
  addScript: boolean=false;
  paypalConfig={
    env:'sandbox',
    client:{
      sandbox:'ATMD2dqVD_lg7p-mvPmD-roRCO0GShyDfla5X2MZZ1x48-D5vhYIixvzFBIH9fVrXx3hzha2VIQyoHg8',
      production:'<your-production-key here'
    },
    commit:true,
    payment:(data,actions)=>{
      return actions.payment.create({
        payment:{
          transactions:[
            {amount:{total:this.totalPrice, currency:'USD'}}
          ]
        }
      });
    },

  }
  constructor(
    private _cartService : CartService
  ) { 
    this.totalPrice=0;
  }

  ngOnInit() {
    this.getTotal();
    this.paypal();
  }
  paypal(){
  paypal
  .Buttons({
    createOrder:(data,actions)=>{
      return actions.order.create({
        purchase_units: [
          {
            amount:{
              currency_code: 'USD',
              value         : this.totalPrice
            }
          }
        ]
      })
    },
    onApprove:async(data,actions)=>{
      const order=await actions.order.capture();
      console.log(order);
    },
    onError:err=>{
      console.log(err);
    }
  })
  .render(this.paypalElement.nativeElement);
  }

 /*  ngAfterViewChecked():void{
    if(!this.addScript){
      this.addPaypalScript().then(()=>{
        paypal.Button.render(this.paypalConfig,'#paypal-checkout-btn')
      })
    }
  }
  addPaypalScript(){
    this.addScript= true;
    return new Promise((resolve,reject)=>{
      let scripttagElement=document.createElement('script');
      scripttagElement.src='http://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload=resolve;
      document.body.appendChild(scripttagElement);
    })
  } */
  getTotal(){
    this._cartService.getTotal().subscribe(
      Response=>{
        this.totalPrice=Response;
        console.log(Response);
      }
    )
  }
  pay(){
    let params={
      total_price:this.totalPrice,
      currency:'usd'
    }
    console.log(params);
  }
}
