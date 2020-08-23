import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Utils } from '../../Utils';
import { Constants } from '../../Constants';
import { OrderService } from '../../services/order/order.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any[];
  categoryId:number;
  logged:boolean;
  token:any;
  
  constructor(
    private router:Router,
    private _productService: ProductService,
    private _orderService: OrderService
  ) { 
    this.products=[];
    this.categoryId= +Utils.get(Constants.ACTUAL_CATEGORY_ID);
    this.token=Utils.get(Constants.ACTUAL_ACCESS_TOKEN);
    this.logged= this.token != null;
  }

  ngOnInit() {
    this.getProductsOfACategory();
    
  }
  getProducts(){
    this._productService.getProducts().subscribe(
      Response=> {
        console.log(Response);
        this.products=Response;
      }
    )
  }
  getProductsOfACategory(){
    this._productService.getProductsOfACategory(this.categoryId).subscribe(
      Response=>{
        this.products=Response;
       
      }
    )
  }
  addProduct(productId,forma:NgForm){
    if(forma.value.product_amount==""){
      alert('Seleccione una cantidad del producto');
    }
    console.log(productId);
    console.log(forma.value);
    this._orderService.addProducts(productId,forma.value).subscribe(
      Response=>{
        console.log(Response);
        alert('Producto Añadido');
      }
    )
  }
}
