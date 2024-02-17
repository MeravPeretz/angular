import { Component, EventEmitter, Output } from '@angular/core';
import { Curse } from '../../models/curse';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Type } from '../../models/enums';

@Component({
  selector: 'app-add-curse',
  templateUrl: './add-curse.component.html',
  styleUrl: './add-curse.component.scss'
})
export class AddCurseComponent {

  newCurse:Curse =({id:0,name:"",numOfHours:0,type:Type.frontal,teacher:"",software:"",startDate:new Date()});
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
    debugger;
    if(this.f.valid){
      this.saved.emit(this.newCurse);
      this.newCurse=({id:0,name:"",numOfHours:0,type:Type.frontal,teacher:"",software:"",startDate:new Date()});

    }
  }
  types (){return Type;} 
  typeValues() {return [Type.computerized,Type.frontal,Type.laboratory];} 
}

