import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
  constructor(private router:Router,
    private active:ActivatedRoute){
    if(!UserService.user)
    this.router.navigate(['login'], {relativeTo:this.active})

  }

}
