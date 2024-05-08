import { Injectable } from '@angular/core';
import { Job } from '../models/job';
import { HttpClient } from '@angular/common/http';
import { JobField } from '../models/jobField';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  constructor(private http:HttpClient) { }
  jobs:Job[] |undefined;
  getJobs(){
    return new Promise((resolve, reject) => {
      this.http.get(`https://localhost:44337/api/Job`).subscribe((res: any) => {
        this.jobs = res;
        resolve(this.jobs);
        localStorage.setItem("jobs",JSON.stringify(this.jobs));
      });
    });
  }
  getJob( id:number){
    return this.jobs?.find(j=>j.id=id);
  }
  filteredJobs: Job[] |undefined;
  filterJobs(jobs:Job[]|undefined,jobField:string,area:string){
    debugger;
    this.filteredJobs= (area!=""&&area!=undefined)? jobs?.filter(j=>area==j.area):jobs;
    return jobField!=""?this.filteredJobs?.filter(j=>j.jobField==+jobField):this.filteredJobs;
  }
}
