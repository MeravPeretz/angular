import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SearchJobComponent } from './components/search-job/search-job.component';
import { JobComponent } from './components/job/job.component';
import { WrongPathComponent } from './components/wrong-path/wrong-path.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path: 'jobs/:jobField/:area', component:SearchJobComponent},
    {path: 'jobs/:jobField', component:SearchJobComponent},
    {path: 'jobs', component:SearchJobComponent},
    {path: 'job/:id', component:JobDetailsComponent},
  ]},
  {path: 'login', component:LoginComponent},
  {path: '**', component:WrongPathComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
