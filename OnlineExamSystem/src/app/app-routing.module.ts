import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import {MainComponent} from "./components/main/main.component";
import {MainsComponent} from "./components/mains/mains.component";
import {DepartmentManagementComponent} from "./components/information-manage/department-manage/department-manage.component";
import {SchoolManageComponent} from "./components/information-manage/school-manage/school-manage.component";
import {AdminManageComponent} from "./components/information-manage/admin-manage/admin-manage.component";
import {LeadershipManageComponent} from "./components/information-manage/leadership-manage/leadership-manage.component";
import {StudentManageComponent} from "./components/information-manage/student-manage/student-manage.component";
import {TeacherManageComponent} from "./components/information-manage/teacher-manage/teacher-manage.component";
import {CourseManageComponent} from "./components/information-manage/course-manage/course-manage.component";
import {ClassManageComponent} from "./components/information-manage/class-manage/class-manage.component";
import {MajorManageComponent} from "./components/information-manage/major-manage/major-manage.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'main', component: MainComponent, children:[
    {path: '', component: MainsComponent},
    //信息管理
    {path:'admin-manage',component:AdminManageComponent},
    {path:'leadership-manage',component:LeadershipManageComponent},
    {path:'school-manage',component:SchoolManageComponent},
    {path: 'department-manage', component: DepartmentManagementComponent},
    {path:'major-manage',component:MajorManageComponent},
    {path:'class-manage',component:ClassManageComponent},
    {path: 'course-manage', component: CourseManageComponent},
    {path:'teacher-manage',component:TeacherManageComponent},
    {path:'student-manage',component:StudentManageComponent},
  ]},

  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
