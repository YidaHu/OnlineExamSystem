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
import {MainComponent} from './components/main/main.component';
import {MainsComponent} from './components/mains/mains.component';
import {DepartmentManagementComponent} from './components/information-manage/department-manage/department-manage.component';
import {SchoolManageComponent} from './components/information-manage/school-manage/school-manage.component';
import {AdminManageComponent} from './components/information-manage/admin-manage/admin-manage.component';
import {ClassManageComponent} from './components/information-manage/class-manage/class-manage.component';
import {CourseManageComponent} from './components/information-manage/course-manage/course-manage.component';
import {LeadershipManageComponent} from './components/information-manage/leadership-manage/leadership-manage.component';
import {MajorManageComponent} from './components/information-manage/major-manage/major-manage.component';
import {StudentManageComponent} from './components/information-manage/student-manage/student-manage.component';
import {TeacherManageComponent} from './components/information-manage/teacher-manage/teacher-manage.component';
import {TableServiceService} from "./serve/table-service.service";
import {DesignPaperComponent} from './components/exam-design/design-paper/design-paper.component';
import {GetAnalysisComponent} from './components/data-analysis/get-analysis/get-analysis.component';
import {NgxEchartsModule} from "ngx-echarts";
import {KnowledgeAnalysisComponent} from './components/data-analysis/knowledge-analysis/knowledge-analysis.component';
import {ScoreAnalysisComponent} from './components/data-analysis/score-analysis/score-analysis.component';
import {DataAnalysisServiceService} from "./serve/data-analysis-service.service";
import {UploadTitleComponent} from './components/title-manage/upload-title/upload-title.component';
import {UMeditorModule} from "ngx-umeditor";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {GradeQueryComponent} from './components/information-query/grade-query/grade-query.component';
import {StudentQueryComponent} from './components/information-query/student-query/student-query.component';
import {TeacherQueryComponent} from './components/information-query/teacher-query/teacher-query.component';
import {GradeQueryServerService} from "./serve/information-query/grade-query-server.service";
import {AdminManageServerService} from "./serve/information-manage/admin-manage-server.service";
import {LeadershipManageServerService} from "./serve/information-manage/leadership-manage-server.service";
import {SchoolManageServerService} from "./serve/information-manage/school-manage-server.service";
import {DepartmentManageServerService} from "./serve/information-manage/department-manage-server.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorPageComponent,
    MainComponent,
    MainsComponent,
    DepartmentManagementComponent,
    SchoolManageComponent,
    AdminManageComponent,
    ClassManageComponent,
    CourseManageComponent,
    LeadershipManageComponent,
    MajorManageComponent,
    StudentManageComponent,
    TeacherManageComponent,
    DesignPaperComponent,
    GetAnalysisComponent,
    KnowledgeAnalysisComponent,
    ScoreAnalysisComponent,
    UploadTitleComponent,
    GradeQueryComponent,
    StudentQueryComponent,
    TeacherQueryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
    NgxEchartsModule,
    UMeditorModule,
    NgbModule,
  ],
  providers: [
    LoginServeService,
    TableServiceService,
    DataAnalysisServiceService,
    GradeQueryServerService,
    AdminManageServerService,
    LeadershipManageServerService,
    SchoolManageServerService,
    DepartmentManageServerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
