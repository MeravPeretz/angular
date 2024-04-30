import { Component } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrl: './search-job.component.scss'
})
export class SearchJobComponent {
  jobs:Job[] |undefined;
  constructor(private JobsSVC:JobsService){
    this.loadJobs();
  };
  async loadJobs(){
    await this.JobsSVC.getJobs();
    this.jobs=this.JobsSVC.jobs;
  }

}
