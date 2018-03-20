import {Component, OnInit} from '@angular/core';
import {CourseManageServerService} from "../../../serve/information-manage/course-manage-server.service";
import {DepartmentManageServerService} from "../../../serve/information-manage/department-manage-server.service";
import {MajorManageServerService} from "../../../serve/information-manage/major-manage-server.service";

@Component({
  selector: 'app-subject-bind',
  templateUrl: './subject-bind.component.html',
  styleUrls: ['./subject-bind.component.css']
})
export class SubjectBindComponent implements OnInit {

  private _subject;
  private subjectIds;
  private _major;
  private subjects;
  private majors;
  private _department;
  private departments;

  constructor(private courseManageServerService: CourseManageServerService,
              private departmentManageServerService: DepartmentManageServerService,
              private majorManageServerService: MajorManageServerService) {
  }

  ngOnInit() {

    //校管获取所属学校的所有学院
    this.departmentManageServerService.getDepartmentFromAdmin({
      'page': 1,
      'size': 10,
    }).subscribe((data: any) => {

      console.log(data.data.list)
      this.departments = data.data.list;

    });


  }

  queryMajorSubject(department) {
    console.log(department);
    this.courseManageServerService.getCourse({
      'page': 1,
      'size': 10,
      'departmentId': department,
    }).subscribe((data: any) => {

      console.log(data.data.list)
      // this.scholls = data.data.list;
      this.subjects = data.data.list;

    });

    this.majorManageServerService.getMajorFromAdmin({
      'page': 1,
      'size': 10,
      'departmentId': department
    }).subscribe((data: any) => {

      console.log(data.data.list)
      // this.scholls = data.data.list;
      this.majors = data.data.list;

    });
  }

  insertBind() {

    let str = [];
    for (let i of this._subject) {
      str.push({"id": i});
    }
    this.subjectIds = str;

    const body = {
      majorId: this._major,
      subjectIds: this.subjectIds,
    };
    this.majorManageServerService.bindMajor2Subject(body).subscribe((data: any) => {
      console.log("绑定");
      console.log(body);
      console.log(data);
    });


  }

}
