import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    public _http: HttpClient,
    private _requestService: RequestService = new RequestService(_http)
  ) { }
  getProducts(): Observable<any>{
    return this._requestService.get('readProducts')
  }
  getProductsOfACategory(categoryId:number): Observable<any>{
    return this._requestService.get('productsOfACategory/'+ categoryId) ;
  }
}
