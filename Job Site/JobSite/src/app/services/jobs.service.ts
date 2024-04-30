import { Injectable } from '@angular/core';
import { Job } from '../models/job';
import { HttpClient } from '@angular/common/http';

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
}
