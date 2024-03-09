import { Component, EventEmitter, Output, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router:Router,
    private active:ActivatedRoute){

  }
 // @Output() enterSucced:EventEmitter<any> = new EventEmitter<any>()
  enter(){
      //this.enterSucced.emit();
      debugger;
      UserService.user=true;
      this.router.navigate([''])
  }
}
