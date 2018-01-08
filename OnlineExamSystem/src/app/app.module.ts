import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {ErrorPageComponent} from './components/error-page/error-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {LoginServeService} from "./serve/login-serve.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MainComponent } from './components/main/main.component';
import { MainsComponent } from './components/mains/mains.component';
import { DepartmentManagementComponent } from './components/information-manage/department-manage/department-manage.component';
import {SchoolManagementComponent} from './components/information-manage/school-manage/school-manage.component';
import { AdminManageComponent } from './components/information-manage/admin-manage/admin-manage.component';
import { ClassManageComponent } from './components/information-manage/class-manage/class-manage.component';
import { CourseManageComponent } from './components/information-manage/course-manage/course-manage.component';
import { LeadershipManageComponent } from './components/information-manage/leadership-manage/leadership-manage.component';
import { MajorManageComponent } from './components/information-manage/major-manage/major-manage.component';
import { StudentManageComponent } from './components/information-manage/student-manage/student-manage.component';
import { TeacherManageComponent } from './components/information-manage/teacher-manage/teacher-manage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorPageComponent,
    MainComponent,
    MainsComponent,
    DepartmentManagementComponent,
    SchoolManagementComponent,
    AdminManageComponent,
    ClassManageComponent,
    CourseManageComponent,
    LeadershipManageComponent,
    MajorManageComponent,
    StudentManageComponent,
    TeacherManageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [
    LoginServeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
