import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurseComponent } from './components/curse/curse.component';
import { RegisteringToCursesComponent } from './components/registering-to-curses/registering-to-curses.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCurseComponent } from './components/add-curse/add-curse.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CourseEditingComponent } from './components/course-editing/course-editing.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CurseComponent,
    RegisteringToCursesComponent,
    LoginComponent,
    AddCurseComponent,
    AboutComponent,
    ContactUsComponent,
    CourseEditingComponent,
    NotFoundComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
