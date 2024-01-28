import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurseComponent } from './components/curse/curse.component';
import { RegisteringToCursesComponent } from './components/registering-to-curses/registering-to-curses.component';

@NgModule({
  declarations: [
    AppComponent,
    CurseComponent,
    RegisteringToCursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
