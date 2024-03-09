import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CurseService } from '../../services/curse.service';
import { Curse } from '../../models/curse';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Type } from '../../models/enums';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-course-editing',
  templateUrl: './course-editing.component.html',
  styleUrl: './course-editing.component.scss'
})
export class CourseEditingComponent implements OnInit {
  curseId:number=-1
  curseToUpdate:Curse |undefined=undefined;
  user:boolean=UserService.user;
  constructor(private curseSvc:CurseService, private router:Router,
    private active:ActivatedRoute){}
    ngOnInit(): void {
      this.active.params.subscribe(params=>
        {this.curseId= params['id']})
      this.curseSvc.curseList.forEach(c =>{ if(c.id==this.curseId)this.curseToUpdate=c})
      if(!this.curseToUpdate)
      {
        this.router.navigate(['**'], {relativeTo:this.active})
      }
}
@Output() saved:EventEmitter<Curse>  = new EventEmitter<Curse>
f :FormGroup= new FormGroup(
  {
    name: new FormControl("",[Validators.required]),
    numOfHours: new FormControl("", [Validators.required, Validators.max(50),Validators.min(3)]),
    type: new FormControl("",[Validators.required, Validators.min(0),Validators.max(2)]),
    teacher:new FormControl("",[Validators.required]),
    software:new FormControl(),
    startDate:new FormControl()
  })
 save(){
  if(this.f.valid){
    this.saved.emit(this.curseToUpdate);
    alert("נשמר בהצלחה!")
    this.curseToUpdate=undefined;
    this.router.navigate(['../'], {relativeTo:this.active})

  }
}
types (){return Type;} 
typeValues() {return [Type.computerized,Type.frontal,Type.laboratory];} 
  }


