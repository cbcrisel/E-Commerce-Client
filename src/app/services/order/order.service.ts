import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    public _http: HttpClient,
    private _requestService: RequestService = new RequestService(_http)
  ) { }
  addProducts(id:number,params): Observable<any>{
    return this._requestService.post('addOrder/'+id,params);
  }
}
