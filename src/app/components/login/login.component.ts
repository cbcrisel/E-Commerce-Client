import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { Constants } from 'src/app/Constants';
import { Utils } from 'src/app/Utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;
  constructor(
    private router: Router,
    private _userService: UserService
  ) { 
    this.user= new User('','');
  }

  ngOnInit() {
  }
  login(){
    this._userService.login(this.user).subscribe(
      Response=>{
        console.log(Response);
        Utils.set(Constants.ACTUAL_ACCESS_TOKEN, Response.access_token);
        location.reload();
        this.router.navigateByUrl('/register', {skipLocationChange: true}).then(()=>
        this.router.navigate([Constants.ROUTE_HOME])); 
        alert('INICIO DE SESION');
        
      }
    )
  }
}
