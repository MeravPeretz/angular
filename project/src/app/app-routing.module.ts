import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RegisteringToCursesComponent } from './components/registering-to-curses/registering-to-curses.component';
import { CourseEditingComponent } from './components/course-editing/course-editing.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path:'',component:AboutComponent},
  {path: 'contact-us', component:ContactUsComponent,},
  {path: 'curses', component:RegisteringToCursesComponent},
  {path:'curses/:id',component:CourseEditingComponent},
  {path: '**', component:NotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
