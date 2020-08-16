import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor(
    public _http: HttpClient,
    private _requestService: RequestService = new RequestService(_http)
  ) { }
  getCart(): Observable<any>{
    return this._requestService.get('getCart');
  }
  getTotal(): Observable<any>{
    return this._requestService.get('getTotal');
  }
  delete(productId:number): Observable<any> {
    return this._requestService.delete('deleteOrderProduct/'+ productId);
  }
}
