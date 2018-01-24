import {Component, OnInit} from '@angular/core';
import {TableServiceService} from "../../../serve/table-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminManageServerService} from "../../../serve/imformation-manage/admin-manage-server.service";
import {HttpHeaders} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";
import {HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
@Component({
  selector: 'app-admin-manage',
  templateUrl: './admin-manage.component.html',
  styleUrls: ['./admin-manage.component.css']
})

export class AdminManageComponent implements OnInit {
  validateForm: FormGroup;

  private statusShow = false;
  /*状态*/

  private result: Observable<any>;

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

  constructor(private fb: FormBuilder, private adminManageServerService: AdminManageServerService, private http: HttpClient) {
  }

  ngOnInit() {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('loginName', 'test123');
    urlSearchParams.append('password', 'test123');
    urlSearchParams.append('realName', 'test');
    urlSearchParams.append('gender', '男');
    urlSearchParams.append('roleId', '2');
    let param = urlSearchParams.toString()
    // this.http.post("http://localhost:8081/examonline/api/root/user/addrooter",param).subscribe(data => console.log(data));

    this.http.post('http://localhost:8081/examonline/api/root/user/addrooter', param, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
      withCredentials: true,
    }).subscribe(data => {
      console.log(data);
    })

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
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('page', `${this._current}`);
    urlSearchParams.append('size', `${this._pageSize}`);
    let param = urlSearchParams.toString();

    // const params = new HttpParams()
    //   .set('page', 1)
    //   .set('size', '10');

    this.adminManageServerService.getAdmin({'page':1,'size':10}, 'name', this._sortValue, selectedGender, 'http://localhost:8081/examonline/api/root/user/listrooter').subscribe((data: any) => {

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
