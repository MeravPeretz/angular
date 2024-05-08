import { Component, EventEmitter, Input, Output } from '@angular/core';
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

@Output('sendCV') sendCV: EventEmitter<any> = new EventEmitter<any>()

sendcv(){
  this.sendCV.emit({name:this.job?.name});
}
  @Input() job:Job | undefined;
}
