import {Component, OnInit} from '@angular/core';
import {TableServiceService} from "../../../serve/table-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TeacherManageServerService} from "../../../serve/information-manage/teacher-manage-server.service";
import {DepartmentManageServerService} from "../../../serve/information-manage/department-manage-server.service";
import {MajorManageServerService} from "../../../serve/information-manage/major-manage-server.service";
import {CourseManageServerService} from "../../../serve/information-manage/course-manage-server.service";
@Component({
  selector: 'app-teacher-manage',
  templateUrl: './teacher-manage.component.html',
  styleUrls: ['./teacher-manage.component.css']
})

export class TeacherManageComponent implements OnInit {
  validateForm: FormGroup;

  private id_modal;
  private login_name_modal;
  private real_name_modal;
  private password_modal;
  private subject_modal;
  private department_modal;
  private subjects_modal;
  private departments_modal;

  private statusShow = false;
  /*状态*/

  private id;
  /*删除的id*/
  private tabTitle = "";
  /*弹窗标题*/
  private scholls;
  private schollsId;
  private serachShow = false;
  /*控制是否生成table*/
  private isVisible = false;
  /*tab添加修改窗口*/
  _current = 1;
  _pageSize = 10;
  _total = 1;
  _dataSet = [];
  _loading = true;
  _sortValue = null;
  _filterGender = [
    {name: 'male', value: false},
    {name: 'female', value: false}
  ];

  constructor(private _randomUser: TableServiceService,
              private teacherManageServerService: TeacherManageServerService,
              private departmentManageServerService: DepartmentManageServerService,
              private majorManageServerService: MajorManageServerService,
              private courseManageServerService: CourseManageServerService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.scholls = [{value: 'jack', label: 'Jack'},
      {value: 'lucy', label: 'Lucy'},
      {value: 'disabled', label: 'Disabled', disabled: true}];
    this.validateForm = this.fb.group({
      login_name_modal: ['', [Validators.required]],
      real_name_modal: ['', [Validators.required]],
      password_modal: ['', [Validators.required]],
      subject_modal: ['', [Validators.required]],
      department_modal: ['', [Validators.required]],
      is_adult: ['', [Validators.required]]
    });
    this.searchTeacher();
    //校管获取所属学校的所有学院
    this.departmentManageServerService.getDepartmentFromAdmin({
      'page': 1,
      'size': 10,
    }).subscribe((data: any) => {

      console.log(data.data.list)
      this.departments_modal = data.data.list;

    });
  }

  querySubject(department_modal) {
    this.courseManageServerService.getCourse({
      'page': 1,
      'size': 10,
      'departmentId': this.department_modal,
    }).subscribe((data: any) => {

      // this.scholls = data.data.list;
      if (data.data) {
        this.subjects_modal = data.data.list;
      }
    });
  }

  //查询数据
  searchTeacher() {
    // console.log(this.schollsId);
    this.serachShow = true;
    this.refreshData();
  }

  /*弹窗*/
  operateData(strs) {
    this.isVisible = true;
    if (strs == "add") {
      this.tabTitle = "添加教师数据";
      this.statusShow = false;
    } else {
      this.tabTitle = "修改教师数据";
      this.id_modal = strs.id;
      this.login_name_modal = strs.loginName;
      this.real_name_modal = strs.realName;
      // this.password_modal = strs.schoolId;
      this.department_modal = strs.departmentId;
      this.subject_modal = strs.subjects;
      this.statusShow = true;
    }
  }

  submit() {
    let str = [];
    for (let i of this.subject_modal) {
      str.push({"id": i});
    }
    console.log(str)
    if (this.statusShow == true) {
      const body = {
        id: this.id_modal,
        loginName: this.login_name_modal,
        realName: this.real_name_modal,
        password: this.password_modal,
        departmentId: this.department_modal,
        subjects: str,
      };
      this.teacherManageServerService.updateTeacher(body).subscribe((data: any) => {
        console.log("更新");
        console.log(body);
      });
    } else {
      // console.log(this.subject_modal);
      const body = {
        loginName: this.login_name_modal,
        realName: this.real_name_modal,
        password: this.password_modal,
        departmentId: this.department_modal,
        subjects: str,
      };
      this.teacherManageServerService.addTeacher(body).subscribe((data: any) => {
        console.log("添加");
        console.log(body);
      });
    }
    // console.log(this.validateForm.value);
    this.validateForm.reset();
    // console.log(this.validateForm.value)
    this.isVisible = false;
    this.searchTeacher();
    // this.searchSchool();
    /*刷新table*/
  }

  //添加数据
  addTeacher() {
    if (this.validateForm.valid) {
      /*此处提交*/
      console.log(this.validateForm.value);
      this.validateForm.reset();
      console.log(this.validateForm.value)
      this.isVisible = false;
      this.refreshData(true);
      /*刷新table*/

    }
  }

  //关闭窗口
  handleCancel() {
    this.isVisible = false;
  }

  sort(value) {
    this._sortValue = value;
    this.refreshData();
  }

  reset() {
    this._filterGender.forEach(item => {
      item.value = false;
    });
    this.refreshData(true);
  }


  //表格数据操作
  refreshData(reset = false) {
    if (reset) {
      this._current = 1;
    }
    this._loading = true;
    this.teacherManageServerService.getTeacher({
      'page': 1,
      'size': 10
    }).subscribe((data: any) => {

      console.log(data.data.list)
      this._loading = false;
      this._total = data.data.endRow;
      this._dataSet = data.data.list;

    });
  }

  /*删除提醒操作*/
  cancel = function () {
    this.alertTab = false;
  };

  confirm = function (id) {
    /*删除数据请求*/
    console.log(id);
    this.teacherManageServerService.deleteTeacher({id: id}).subscribe((data: any) => {
      // console.log(data)
    });
    this.searchLeadership();
    // this.refreshData(true);
  };

}
