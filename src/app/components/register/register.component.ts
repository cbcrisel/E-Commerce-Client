import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { Constants } from '../../Constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user;
  constructor(
    private router:Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.refresh();
  }
  refresh(){
    this.user={
      name:'',
      lastname:'',
      location:'',
      email:'',
      password:''
    }
  }
  guardar(forma:NgForm){
    this._userService.create(forma.value).subscribe(
      Response=>{
        console.log(Response);
        this.router.navigate([Constants.ROUTE_HOME]);
      }
    )
  }
}
