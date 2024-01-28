import { Component } from '@angular/core';
import { Curse } from '../../models/curse';
import { Type } from '../../models/enums';

@Component({
  selector: 'app-registering-to-curses',
  templateUrl: './registering-to-curses.component.html',
  styleUrl: './registering-to-curses.component.scss'
})
export class RegisteringToCursesComponent {
  curses:Curse[]=[
    {
      name:'angular',
      numOfHours:30,
      type:Type.frontal,
      teacher:'rut lev',
      software:'angular,nodejs',
      startDate:new Date("10/12/2024")
    },
    {
      name:'java',
      numOfHours:30,
      type:Type.computerized,
      teacher:'rut lev',
      software:'angular,nodejs',
      startDate:new Date("10/12/2024")
    }
  ]  
  register:Curse[]=[]
  reg:any[] = [{r:false}, {r:false}]
updateRegister($event:any){
  if($event.isRegister)
    this.register.push($event.curse)
  else
    this.register=this.register.filter(c=>c!==$event.curse)
}
cancelRegister(){
  this.register=[]
}
}
