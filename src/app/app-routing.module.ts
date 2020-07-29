import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Constants } from './Constants';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo: Constants.ROUTE_HOME
  },
  {
    path:Constants.ROUTE_HOME,
    component: HomeComponent
  },
  {
    path:Constants.ROUTE_PRODUCTS,
    component: ProductsComponent
  },
  {
    path:Constants.ROUTE_CART,
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
