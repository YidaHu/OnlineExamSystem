import {Component, OnInit} from '@angular/core';
import {TableServiceService} from "../../../serve/table-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DepartmentManageServerService} from "../../../serve/information-manage/department-manage-server.service";
import {CourseManageServerService} from "../../../serve/information-manage/course-manage-server.service";
@Component({
  selector: 'app-course-department-manage',
  templateUrl: './course-manage.component.html',
  styleUrls: ['./course-manage.component.css']
})

export class CourseManageComponent implements OnInit {
  validateForm: FormGroup;

  private department;
  private departments;

  private course_modal;
  private department_modal;
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
              private departmentManageServerService: DepartmentManageServerService,
              private courseManageServerService: CourseManageServerService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      course_modal: ['', [Validators.required]],
      department_modal: ['', [Validators.required]],
      is_adult: ['', [Validators.required]]
    });
    //校管获取所属学校的所有学院
    this.departmentManageServerService.getDepartmentFromAdmin({
      'page': 1,
      'size': 10,
    }).subscribe((data: any) => {

      console.log(data.data.list)
      this.departments = data.data.list;
      this.departments_modal = data.data.list;

    });

  }

  //查询数据
  searchCourse() {
    // console.log(this.schollsId);
    this.courseManageServerService.getCourse({
      'page': 1,
      'size': 10,
      'departmentId': this.department,
    }).subscribe((data: any) => {

      console.log(data.data.list)
      // this.scholls = data.data.list;
      this._loading = false;
      this._total = data.data.endRow;
      this._dataSet = data.data.list;

    });
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
      this.id = strs.id;
      this.course_modal = strs.name;
      this.department_modal = strs.department_name;
      this.statusShow = true;
    }
  }

  submit() {
    if (this.statusShow == true) {
      const body = {
        id: this.id,
        name: this.course_modal,
        departmentId: this.department_modal,
      };
      this.courseManageServerService.updateCourse(body).subscribe((data: any) => {
        console.log("更新");
        console.log(body);
      });
    } else {
      const body = {
        name: this.course_modal,
        departmentId: this.department_modal,
      };
      this.courseManageServerService.addCourse(body).subscribe((data: any) => {
        console.log("添加");
        console.log(body);
      });
    }
    this.validateForm.reset();
    this.searchCourse();
    this.isVisible = false;
    /*刷新table*/

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
    const selectedGender = this._filterGender.filter(item => item.value).map(item => item.name);
    this._randomUser.getUsers(this._current, this._pageSize, 'name', this._sortValue, selectedGender, '/api/course').subscribe((data: any) => {
      this._loading = false;
      this._total = data[0].info.total;
      this._dataSet = data[0].results;
      console.log(data)
    })
  }

  /*删除提醒操作*/
  cancel = function () {
    this.alertTab = false;
  };

  confirm = function (id) {
    /*删除数据请求*/
    console.log(id);
    this.courseManageServerService.deleteCourse(id).subscribe((data: any) => {
      // console.log(data)
    });
    this.searchCourse();
    // this.refreshData(true);
  };

}
