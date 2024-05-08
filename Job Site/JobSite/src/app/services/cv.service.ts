import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  Cv:string[]=[];
  stringCV:any=null
  numOfcv:number=0
  constructor() { 
    this.getCv();
    this.getNumOfcv();
  }
  sendCv(name:string){
    this.Cv.push(name);
    this.numOfcv++;
    localStorage.setItem("cv",JSON.stringify(this.Cv));
    localStorage.setItem("numOfcv",JSON.stringify(this.numOfcv));
    this.addcv();
  }
  getCv(){
    this.stringCV=localStorage.getItem("cv");
    if(this.stringCV!=null)
      this.Cv=JSON.parse(this.stringCV);
  }
  numOfCVString:string|null=null
  getNumOfcv(){
    debugger;
    this.numOfCVString=localStorage.getItem("numOfcv");
    if(this.numOfCVString!=null)
      this.numOfcv=+this.numOfCVString;
  }

  addCV: EventEmitter<any> = new EventEmitter<any>()
  addcv(){
    debugger;
    this.addCV.emit();
  }
}
