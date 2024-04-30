import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SearchJobComponent } from './components/search-job/search-job.component';
import { JobComponent } from './components/job/job.component';
import { WrongPathComponent } from './components/wrong-path/wrong-path.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path: 'jobs', component:SearchJobComponent},
    {path: 'jobs/:job', component:JobComponent},
  ]},
  {path: 'login', component:LoginComponent},
  {path: '**', component:WrongPathComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
