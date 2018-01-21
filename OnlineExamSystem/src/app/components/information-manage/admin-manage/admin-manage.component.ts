import {Component, OnInit} from '@angular/core';
import {TableServiceService} from "../../../serve/table-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminManageServerService} from "../../../serve/imformation-manage/admin-manage-server.service";
@Component({
  selector: 'app-admin-manage',
  templateUrl: './admin-manage.component.html',
  styleUrls: ['./admin-manage.component.css']
})

export class AdminManageComponent implements OnInit {
  validateForm: FormGroup;

  private statusShow = false;
  /*状态*/

  private id;
  /*删除的id*/
  private tabTitle = "";
  /*弹窗标题*/
  private scholls;
  private schollsId;

  private loginName;
  private realName;
  private password;
  private genders;


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

  constructor(private fb: FormBuilder, private adminManageServerService: AdminManageServerService) {
  }

  ngOnInit() {
    this.genders = [{value: 'jack', label: 'Jack'},
      {value: 'lucy', label: 'Lucy'},
      {value: 'disabled', label: 'Disabled', disabled: true}];
    this.validateForm = this.fb.group({

      loginName: ['', [Validators.required]],
      realName: ['', [Validators.required]],
      genders: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.searchAdmin();
  }

  //查询数据
  searchAdmin() {
    // console.log(this.schollsId);
    this.serachShow = true;
    this.refreshData();
  }


  /*弹窗*/
  operateData(strs) {
    this.isVisible = true;
    if (strs == "add") {
      this.tabTitle = "添加用户数据";
      this.statusShow = false;
    } else {
      this.tabTitle = "修改用户数据";
      this.statusShow = true;
    }
  }

  //添加数据
  addAdmin() {
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
    const selectedGender = this._filterGender.filter(item => item.value).map(item => item.name);
    this.adminManageServerService.getAdmin(this._current, this._pageSize, 'name', this._sortValue, selectedGender, '/examonline/api/root/user/listrooter').subscribe((data: any) => {
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

  confirm = () => {
    /*删除数据请求*/
    console.log(this.id);
    this.refreshData(true);
  };

}
