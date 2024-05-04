import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router:Router,private active:ActivatedRoute ,private userSVC:UserService){}

  @ViewChild('f')form:any;
  public async login(){
    if(this.form.status=="VALID"){
      if(await this.userSVC.login(this.form.value.name, this.form.value.password))
        this.router.navigate(['jobs',{jobField:this.userSVC.user?.jobSearchField}]);
      else
        alert("user not found, try again!");
    }
    console.log(this.form);
  }
}
