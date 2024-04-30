import { Component } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'JobSite';
  constructor(private router:Router,
    private active:ActivatedRoute,private userSVC:UserService){
      debugger;
    this.userSVC.getUser();
    if(!this.userSVC.user)
      this.router.navigate(['login'], {relativeTo:this.active})
  }
}
