import {Component, OnInit} from '@angular/core';
import {CourseManageServerService} from "../../serve/information-manage/course-manage-server.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  private root = false;
  private admin = false;
  private teacher = false;
  private student = false;

  private subjects;

  isCollapsed = false;

  constructor(private courseManageServerService: CourseManageServerService) {
  }

  ngOnInit() {
    var status = sessionStorage.getItem("roleValue");
    if (status == "1") {
      this.root = true;
      this.admin = false;
      this.teacher = false;
      this.student = false;

    } else if (status == "2") {
      this.root = false;
      this.admin = true;
      this.teacher = false;
      this.student = false;
    } else if (status == "3") {
      this.root = false;
      this.admin = false;
      this.teacher = true;
      this.student = false;
      //教师获取科目
      this.courseManageServerService.getCourseFomTeacher({
        'page': 1,
        'size': 10,
      }).subscribe((data: any) => {

        console.log(data)
        if (data.data) {
          sessionStorage.setItem('teacherSubjects', data.data.list);
          this.subjects = data.data.list;
        }
      });
    } else {
      this.root = false;
      this.admin = false;
      this.teacher = false;
      this.student = true;
    }
  }

  isRoot() {
    return this.root;
  }

  isAdmin() {
    return this.admin;
  }

  isTeacher() {
    return this.teacher;
  }

  isStudent() {
    return this.student;
  }

  isRootAdmin() {
    return this.root || this.admin;
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  selectSubject(selectedSubject) {
    console.log(selectedSubject);
    sessionStorage.setItem('selectedSubject', selectedSubject);//把选择的科目保存到sessionStorage中
  }
}
