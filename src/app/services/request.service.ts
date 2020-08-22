import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Utils } from '../Utils';
import { Constants } from '../Constants';



@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private headers: HttpHeaders;
  private url= "http://ec2-3-133-110-23.us-east-2.compute.amazonaws.com/api"
  constructor(private _http: HttpClient) { 

  }
  get(prefixUrl: string): Observable<any>{
    this.setHeaders();
    return this._http.get(this.url+prefixUrl,{headers:this.headers});
  }
  setHeaders(){
    this.headers=new HttpHeaders()
    .set("Content-Type","application/json")
    .set("X-Requested-With","XMLHttpRequest")
    .set('Authorization', 'Bearer ' + Utils.get(Constants.ACTUAL_ACCESS_TOKEN));
  }
  post(prefixUrl: string, params: any = null): Observable<any> {
    this.setHeaders();
    return this._http.post(
      this.url + prefixUrl,
      params,
      { headers: this.headers }
    );
  }
  delete(prefixUrl: string, params: any = null): Observable<any> {
    this.setHeaders();
    return this._http.delete(
      this.url + prefixUrl,
      {headers: this.headers}
    );
  }
}
