import { Component, Input } from '@angular/core';
import { Job } from '../../models/job';
import { JobField } from '../../models/jobField';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
  constructor(private router:Router){}
ShowJobDetails() {
  this.router.navigate(['job/'+this.job?.id]);
}
getField() {
  if(this.job!=undefined)
    return JobField[this.job.jobField];
  return " ";
}
  @Input() job:Job | undefined;
}
