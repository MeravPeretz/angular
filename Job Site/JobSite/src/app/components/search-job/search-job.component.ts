import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../models/job';
import { ActivatedRoute } from '@angular/router';
import { JobField } from '../../models/jobField';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrl: './search-job.component.scss'
})
export class SearchJobComponent {

  jobs:Job[] |undefined;
  jobField:string="";
  area:string="";
  cv:string[]=[]
  constructor(private JobsSVC:JobsService,private route: ActivatedRoute,private cvSVC:CvService) {
    this.route.params.subscribe(params => {
      this.jobField= params['jobField'];
      this.area= params['area'];})
    this.loadJobs();
    this.loadCV();
  }
  filter($event:any) {
    this.area = $event.area
    this.jobField=$event.jobField
    this.applyFilter()
  }
  applyFilter(){
    this.jobs = this.JobsSVC.filterJobs(this.jobs,this.jobField, this.area);
  }
  async loadJobs(){
    await this.JobsSVC.getJobs();
    this.jobs=this.JobsSVC.jobs;
    await this.applyFilter();
  }
  sendCV($event:any){
    this.cvSVC.sendCv($event.name);
    this.cv=this.cvSVC.Cv;
  }
  async loadCV(){
    this.cvSVC.getCv();
    this.cv=this.cvSVC.Cv;
  }

}
