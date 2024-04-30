import { Component, Input } from '@angular/core';
import { Job } from '../../models/job';
import { JobField } from '../../models/jobField';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
getField() {
  if(this.job!=undefined)
    return JobField[this.job.jobField];
  return " ";
}
  @Input() job:Job | undefined;
}
