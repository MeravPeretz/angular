
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
//import { Observable, Observer } from 'rxjs';
import { Curse } from '../models/curse';
import { Type } from '../models/enums';

@Injectable({
  providedIn: 'root'
})
export class CurseService {

 // num: number = 100
  constructor(private http:HttpClient) { 
    this.getCursesFromServer();
  }

  curseList: Curse[] = []


  getCursesFromServer(){
    debugger;
    this.curseList=
        [{
      id:1,
      name:'angular',
      numOfHours:30,
      type:Type.frontal,
      teacher:'rut lev',
      software:'angular,nodejs',
      startDate:new Date("10/12/2024")
    },
    {
      id:2,
      name:'java',
      numOfHours:30,
      type:Type.computerized,
      teacher:'rut lev',
      software:'angular,nodejs',
      startDate:new Date("10/12/2024")
    }
  ]
   // this.http.get('https://localhost:44337/api/Curse/GetAllCurses').subscribe((res: any) =>{debugger; this.curseList=res.array.map((element: Curse) => {element})})
  }


  addCurse(c:Curse){
   this.curseList.push(c)
    // this.http.post('https://localhost:44337/api/Curse/AddCurse', {body:c}).subscribe(res =>{})
    // this.getCursesFromServer();
  }
}
