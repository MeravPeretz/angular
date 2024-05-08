import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { JobField } from '../../models/jobField';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(private userSVC:UserService,private cvSVC:CvService){
    this.cvSVC.addCV.subscribe(() => this.addCV());
    this.loadcv();
  }
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
  addCV(){
    this.cvSVC.getNumOfcv();
    this.user_cv=this.cvSVC.numOfcv;
  }
  stringUsercv:string | null | undefined;
  async loadcv(){
    this.stringUsercv=localStorage.getItem("numOfcv")
    if(this.stringUsercv!=undefined)
      this.user_cv=+this.stringUsercv;
  }
}
