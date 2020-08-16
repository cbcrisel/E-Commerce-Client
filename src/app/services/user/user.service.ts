import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestService } from '../request.service';
import { User } from 'src/app/models/user/user';
import { Register } from 'src/app/models/user/register';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public _http:HttpClient,
    private _requestService: RequestService= new RequestService(_http)
  ) { }

  login(user: User): Observable<any> {
    return this._requestService.post('login', user);
  }
  create(user): Observable<any>{
    return this._requestService.post('newUser',user);
  }
}
