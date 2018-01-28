import {Component, OnInit} from '@angular/core';
import {TableServiceService} from "../../../serve/table-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LeadershipManageServerService} from "../../../serve/information-manage/leadership-manage-server.service";
import {HttpClient} from "@angular/common/http";
import {SchoolManageServerService} from "../../../serve/information-manage/school-manage-server.service";
@Component({
  selector: 'app-leadership-manage',
  templateUrl: './leadership-manage.component.html',
  styleUrls: ['./leadership-manage.component.css']
})

export class LeadershipManageComponent implements OnInit {
  validateForm: FormGroup;

  private id_modal;
  private loginName_modal;
  private realName_modal;
  private password_modal;
  private school_modal;
  private gender_modal;

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
              private schoolManageServerService: SchoolManageServerService,
              private fb: FormBuilder,
              private leadershipManageServerService: LeadershipManageServerService,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.scholls = [{value: 'jack', label: 'Jack'},
      {value: 'lucy', label: 'Lucy'},
      {value: 'disabled', label: 'Disabled', disabled: true}];
    this.validateForm = this.fb.group({
      leadership_id: ['', [Validators.required]],
      department_id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      is_adult: ['', [Validators.required]]
    });
    //获取学校
    this.schoolManageServerService.getSchool({
      'page': 1,
      'size': 10,
    }).subscribe((data: any) => {

      console.log(data.data.list)
      this.scholls = data.data.list;

    });
    this.searchLeadership();
  }

  //查询数据
  searchLeadership() {
    // console.log(this.schollsId);
    this.serachShow = true;
    this.refreshData(true);
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
      this.loginName_modal = strs.loginName;
      this.realName_modal = strs.realName;
      this.school_modal = strs.schoolId;
      this.gender_modal = strs.gender;
      // this.schoolId = this.scholls[0];
      this.statusShow = true;
    }
  }

  submit() {
    if (this.statusShow == true) {
      const body = {
        id: this.id_modal,
        loginName: this.loginName_modal, realName: this.realName_modal,
        password: this.password_modal, schoolId: this.school_modal, gender: this.gender_modal
      };
      this.leadershipManageServerService.updateLeadership(body).subscribe((data: any) => {
        console.log("更新");
        console.log(body);
      });
    } else {
      const body = {
        loginName: this.loginName_modal, realName: this.realName_modal,
        password: this.password_modal, schoolId: this.school_modal, gender: this.gender_modal
      };
      this.leadershipManageServerService.addLeadership(body).subscribe((data: any) => {
        console.log("添加");
        console.log(body);
      });
    }
    // console.log(this.validateForm.value);
    this.validateForm.reset();
    // console.log(this.validateForm.value)
    this.isVisible = false;
    this.searchLeadership();
    // this.searchSchool();
    /*刷新table*/
  }

  //关闭窗口
  handleCancel() {
    this.isVisible = false;
  }

  sort(value) {
    this._sortValue = value;
    this.refreshData(true);
  }

  reset() {
    this._filterGender.forEach(item => {
      item.value = false;
    });
    this.refreshData(true);
  }


  //表格数据操作
  refreshData(reset) {
    if (reset) {
      this._current = 1;
    }
    this._loading = true;
    this.leadershipManageServerService.getLeadership({
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
    this.leadershipManageServerService.deleteLeadership({id: id}).subscribe((data: any) => {
      // console.log(data)
    });
    this.searchLeadership();
    // this.refreshData(true);
  };

}
