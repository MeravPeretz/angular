import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { JobField } from '../../models/jobField';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(private userSVC:UserService){}
  user:User|undefined=this.userSVC.user;
  user_cv:number=0; 
  getJobSearchField(){
    debugger;
    if(this.user!=undefined)
      return JobField[this.user.jobSearchField];
    return " ";
  }
  getJobsUrl(){
    return "jobs/"+this.user?.jobSearchField;
  }
}
