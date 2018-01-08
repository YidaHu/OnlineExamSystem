import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import {MainComponent} from "./components/main/main.component";
import {MainsComponent} from "./components/mains/mains.component";
import {DepartmentManagementComponent} from "./components/information-manage/department-manage/department-manage.component";
import {SchoolManagementComponent} from "./components/information-manage/school-manage/school-manage.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'main', component: MainComponent, children:[
    {path: '', component: MainsComponent},
    {path: 'department-manage', component: DepartmentManagementComponent},
    {path:'school-manage',component:SchoolManagementComponent}
  ]},

  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
