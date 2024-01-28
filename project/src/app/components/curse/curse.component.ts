import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curse } from '../../models/curse';
import { Type } from '../../models/enums';

@Component({
  selector: 'app-curse',
  templateUrl: './curse.component.html',
  styleUrl: './curse.component.scss'
})
export class CurseComponent {
  @Input() curseData:Curse | null = null
  @Input() isRegister:boolean =false
  @Output() Register = new EventEmitter<any>()

  getTypes(){
    return Type
  }
  getTodayDate(){
    return  new Date(Date.now())
  }
  updateRegister(){
    this.isRegister=!this.isRegister;
    this.Register.emit({curse:this.curseData,isRegister:this.isRegister});
  }
}
