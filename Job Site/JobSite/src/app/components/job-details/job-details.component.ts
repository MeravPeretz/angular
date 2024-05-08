import { Component } from '@angular/core';
import { JobField } from '../../models/jobField';
import { Job } from '../../models/job';
import { JobsService } from '../../services/jobs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {
  jobId: number =-1;
  job:Job | undefined;
  constructor(private JobsSVC:JobsService,private route: ActivatedRoute,private router:Router) {
    this.route.params.subscribe(params => {
      this.jobId= params['id'];
      this.loadJob();
    })
  }

  async loadJob(){
    debugger;
    await this.JobsSVC.getJobs();
    this.job=await this.JobsSVC.getJob(this.jobId);
  }

}
