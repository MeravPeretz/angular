import { Component } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../models/job';
import { ActivatedRoute } from '@angular/router';
import { JobField } from '../../models/jobField';

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrl: './search-job.component.scss'
})
export class SearchJobComponent {

  jobs:Job[] |undefined;
  jobField:string="";
  area:string="";
  constructor(private JobsSVC:JobsService,private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.jobField= params['jobField'];
      this.area= params['area'];})
    this.loadJobs();
  }

  
  filter($event:any) {
    this.area = $event.area
    this.jobField=$event.jobField
    this.applyFilter()
  }
  applyFilter(){
    this.jobs = this.JobsSVC.filterJobs(this.jobField, this.area);
  }
  async loadJobs(){
    await this.JobsSVC.getJobs();
    await this.applyFilter();
  }

}
