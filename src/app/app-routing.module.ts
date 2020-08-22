import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Constants } from './Constants';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';


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
  },
  {
    path:Constants.ROUTE_LOGIN,
    component: LoginComponent
  },
  {
    path:Constants.ROUTE_REGISTER,
    component: RegisterComponent
  },
  {
    path:Constants.ROUTE_PAYMENT,
    component: PaymentComponent
  },
  {
    path:Constants.ROUTE_SHIPMENTS,
    component: ShipmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
