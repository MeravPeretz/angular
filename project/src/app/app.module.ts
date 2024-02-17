import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurseComponent } from './components/curse/curse.component';
import { RegisteringToCursesComponent } from './components/registering-to-curses/registering-to-curses.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCurseComponent } from './components/add-curse/add-curse.component';

@NgModule({
  declarations: [
    AppComponent,
    CurseComponent,
    RegisteringToCursesComponent,
    LoginComponent,
    AddCurseComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
