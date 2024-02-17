import { Component, EventEmitter, Output, input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Output() enterSucced:EventEmitter<any> = new EventEmitter<any>()
  enter(){
      this.enterSucced.emit();
  }
}
