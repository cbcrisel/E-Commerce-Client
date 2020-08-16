import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestService } from '../request.service';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    public _http: HttpClient,
    private _requestService: RequestService = new RequestService(_http)
  ) { }
  getCategories(): Observable<any>{
    return this._requestService.get('readCategories');
  }
}
