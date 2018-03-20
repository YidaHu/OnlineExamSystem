import {Component, OnInit} from '@angular/core';
import {CourseManageServerService} from "../../serve/information-manage/course-manage-server.service";
import {InsertExamService} from "../../serve/exam-design/insert-exam.service";

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

  private _subject;
  private _exam;
  private exams;
  private subjectsStu;
  private subjects;

  isCollapsed = false;
  isVisibleMiddle = false;

  constructor(private courseManageServerService: CourseManageServerService
    , private insertExamService: InsertExamService) {
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
      //学生获取科目
      this.courseManageServerService.getSubjectFromStudent({
        'page': 1,
        'size': 10,
      }).subscribe((data: any) => {
        console.log(data)
        if (data.data) {
          console.log(data.data.list)
          this.subjectsStu = data.data.list;
        }
      });
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

  queryExam(subject) {
    this.insertExamService.getExamListFromStudent({
      'subjectId': subject,
    }).subscribe((data: any) => {

      console.log(data)
      if (data.data) {
        this.exams = data.data;
      }
    });
  }

  showModalMiddle = () => {
    this.isVisibleMiddle = true;
  };
  handleOkMiddle = (e) => {
    console.log('点击了确定');
    this.isVisibleMiddle = false;
    this.insertExamService.getExamFromStudent(this._exam, {
      'subjectId': this._subject,
    }).subscribe((data: any) => {

      console.log(data)
    });
  };

  handleCancelMiddle = (e) => {
    console.log(e);
    this.isVisibleMiddle = false;
  };
}
