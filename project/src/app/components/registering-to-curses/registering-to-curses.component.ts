import { Component, OnInit } from '@angular/core';
import { Curse } from '../../models/curse';
import { Type } from '../../models/enums';
import { CurseService } from '../../services/curse.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registering-to-curses',
  templateUrl: './registering-to-curses.component.html',
  styleUrl: './registering-to-curses.component.scss'
})
export class RegisteringToCursesComponent implements OnInit {
  user:boolean=UserService.user;
  constructor(private curseSvc:CurseService,
    private router:Router, private active:ActivatedRoute){
  }

  ngOnInit(): void {
    this.curses=this.curseSvc.curseList.map(c=>c);

  }
  curses:Curse[]|null=null;
 // user:boolean=false
  
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
// updateUser(){
//   this.user=true;
// }
updateCurse($event:Curse){
  this.curses?.forEach((element:Curse) => {  
  element.id==$event.id?$event:element});
  this.curses=this.curseSvc.curseList;
   }
   edit(id:number){
    this.router.navigate([id], {relativeTo:this.active})
  }
}
