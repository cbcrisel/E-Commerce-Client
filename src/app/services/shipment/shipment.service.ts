import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  constructor(
    public _http: HttpClient,
    private _requestService: RequestService = new RequestService(_http)
  ) { }
  pay(request):Observable<any>{
    return this._requestService.post('newShip',request);
  }
  getShips():Observable<any>{
    return this._requestService.get('getShips');
  }
  changeStage(shipId:number):Observable<any>{
    return this._requestService.get('setStage/'+shipId);
  }
  getShipsOfAUser():Observable<any>{
    return this._requestService.get('getShipsOfAUser');
  }
}
