import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Constants } from '../../Constants';
import { CategoryService } from '../../services/category/category.service';
import { Utils } from '../../Utils';
import { ProductService } from '../../services/product/product.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categories:any[];
  categoryId:number;
  products:any[];
  logged:boolean;
  admin:boolean;
  token:any;
  id:any;
  constructor(
    private router:Router,
    private _categoryService:CategoryService,
    private _productService:ProductService
  ) {
    this.categories=[];
    this.products=[];
    this.categoryId=0;
    this.token=Utils.get(Constants.ACTUAL_ACCESS_TOKEN);
    this.logged= this.token != null;
    this.id=Utils.get(Constants.USER_ID);
    this.admin=this.id==1;
   }

  ngOnInit() {
    this.getCategories();
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
  getCategories(){
    this._categoryService.getCategories().subscribe(
      Response=>{
        this.categories=Response;
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
  goToProductsOfCategories(Event:MouseEvent,categoryId,categoryName){
    Event.preventDefault();
    Utils.set(Constants.ACTUAL_CATEGORY_ID,categoryId);
    Utils.set(Constants.ACTUAL_CATEGORY_NAME,categoryName);
    this.categoryId= +Utils.get(Constants.ACTUAL_CATEGORY_ID);
    this.getProductsOfACategory();
    
    this.router.navigateByUrl('/home', {skipLocationChange: true}).then(()=>
    this.router.navigate([Constants.ROUTE_PRODUCTS])); 
    
    
  }
  closeSession(){
    Utils.deleteAll();
    
    location.reload();
       /*  this.router.navigateByUrl('/user_ships', {skipLocationChange: true}).then(()=>
        this.router.navigate([Constants.ROUTE_HOME])); 
        alert('CIERRE DE SESION EXITOSO'); */
  }
}
