import {Component, OnInit} from '@angular/core';
import {TableServiceService} from "../../../serve/table-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StudentManageServerService} from "../../../serve/information-manage/student-manage-server.service";
import {DepartmentManageServerService} from "../../../serve/information-manage/department-manage-server.service";
import {MajorManageServerService} from "../../../serve/information-manage/major-manage-server.service";
import {ClassManageServerService} from "../../../serve/information-manage/class-manage-server.service";
@Component({
  selector: 'app-student-manage',
  templateUrl: './student-manage.component.html',
  styleUrls: ['./student-manage.component.css']
})

export class StudentManageComponent implements OnInit {
  validateForm: FormGroup;

  private id_modal;
  private login_name_modal;
  private real_name_modal;
  private password_modal;
  private major_modal;
  private department_modal;
  private class_modal;
  private majors_modal;
  private departments_modal;
  private classes_modal;

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
              private studentManageServerService: StudentManageServerService,
              private departmentManageServerService: DepartmentManageServerService,
              private majorManageServerService: MajorManageServerService,
              private classManageServerService: ClassManageServerService,
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
      major_modal: ['', [Validators.required]],
      department_modal: ['', [Validators.required]],
      class_modal: ['', [Validators.required]],
      is_adult: ['', [Validators.required]]
    });
    this.searchStudent();
    //校管获取所属学校的所有学院
    this.departmentManageServerService.getDepartmentFromAdmin({
      'page': 1,
      'size': 10,
    }).subscribe((data: any) => {

      console.log(data.data.list)
      this.departments_modal = data.data.list;

    });
  }

  queryMajor(department_modal) {
    this.majorManageServerService.getMajorFromAdmin({
      'page': 1,
      'size': 10,
      'departmentId': department_modal
    }).subscribe((data: any) => {

      console.log(data.data.list)
      this.majors_modal = data.data.list;

    });
  }

  queryClass(major_modal) {
    this.classManageServerService.getClass({
      'page': 1,
      'size': 10,
      'departmentId': this.department_modal,
      'majorId': this.major_modal,
    }).subscribe((data: any) => {

      console.log(data.data.list)
      // this.scholls = data.data.list;
      this.classes_modal = data.data.list;

    });
  }

  //查询数据
  searchStudent() {
    // console.log(this.schollsId);
    this.serachShow = true;
    this.refreshData();
  }

  /*弹窗*/
  operateData(strs) {
    this.isVisible = true;
    if (strs == "add") {
      this.tabTitle = "添加学院数据";
      this.statusShow = false;
    } else {
      this.tabTitle = "修改学院数据";
      this.id_modal = strs.id;
      this.login_name_modal = strs.loginName;
      this.real_name_modal = strs.realName;
      this.password_modal = strs.schoolId;
      this.department_modal = this.scholls[0];
      this.class_modal = this.scholls[0];
      this.statusShow = true;
    }
  }

  submit() {
    if (this.statusShow == true) {
      const body = {
        id: this.id_modal,
        loginName: this.login_name_modal,
        realName: this.real_name_modal,
        password: this.password_modal,
        departmentId: this.department_modal,
        classId: this.class_modal,
      };
      this.studentManageServerService.updateStudent(body).subscribe((data: any) => {
        console.log("更新");
        console.log(body);
      });
    } else {
      const body = {
        loginName: this.login_name_modal,
        realName: this.real_name_modal,
        password: this.password_modal,
        departmentId: this.department_modal,
        classId: this.class_modal,
      };
      this.studentManageServerService.addStudent(body).subscribe((data: any) => {
        console.log("添加");
        console.log(body);
      });
    }
    // console.log(this.validateForm.value);
    this.validateForm.reset();
    // console.log(this.validateForm.value)
    this.isVisible = false;
    this.searchStudent();
    // this.searchSchool();
    /*刷新table*/
  }

  //添加数据
  addStudent() {
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
    this.studentManageServerService.getStudent({
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
    this.studentManageServerService.deleteStudent({id: id}).subscribe((data: any) => {
      // console.log(data)
    });
    this.searchLeadership();
    // this.refreshData(true);
  };

}
