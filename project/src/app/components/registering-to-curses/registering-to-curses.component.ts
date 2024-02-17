import { Component } from '@angular/core';
import { Curse } from '../../models/curse';
import { Type } from '../../models/enums';

@Component({
  selector: 'app-registering-to-curses',
  templateUrl: './registering-to-curses.component.html',
  styleUrl: './registering-to-curses.component.scss'
})
export class RegisteringToCursesComponent {
  user:boolean=false
  curses:Curse[]=[
    {
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
  register:Curse[]=[]
  reg:any[] = [{r:true}, {r:false}]
updateRegister($event:any){
  if($event.isRegister){
    this.register.push($event.curse.name)
  }
  else{
    this.register=this.register.filter(c=>c!==$event.curse.name)
  }
}
cancelRegister(){
  this.register=[]
  this.reg =this.reg.map(n=>n={r:false})
}
updateUser(){
  this.user=true;
}
addCurse($event:Curse){
  this.curses.push($event)
  this.reg.push({r:false})
   }
}
