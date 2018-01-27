import {Component, OnInit} from '@angular/core';
import {TableServiceService} from "../../../serve/table-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LeadershipManageServerService} from "../../../serve/information-manage/leadership-manage-server.service";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-leadership-manage',
  templateUrl: './leadership-manage.component.html',
  styleUrls: ['./leadership-manage.component.css']
})

export class LeadershipManageComponent implements OnInit {
  validateForm: FormGroup;

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

  constructor(private _randomUser: TableServiceService, private fb: FormBuilder, private leadershipManageServerService: LeadershipManageServerService, private http: HttpClient) {
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
    this.searchLeadership();
  }

  //查询数据
  searchLeadership() {
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
  addLeadership() {
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
    this.leadershipManageServerService.getLeadership({
      'page': 1,
      'size': 10
    }, 'http://localhost:8081/examonline/api/root/user/listadmin').subscribe((data: any) => {

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

  confirm = () => {
    /*删除数据请求*/
    console.log(this.id);
    this.refreshData(true);
  };

}
