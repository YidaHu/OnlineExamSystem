import {Component, OnInit} from '@angular/core';
import {TableServiceService} from "../../../serve/table-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GradeQueryServerService} from "../../../serve/information-query/grade-query-server.service";

@Component({
  selector: 'app-grade-query',
  templateUrl: './grade-query.component.html',
  styleUrls: ['./grade-query.component.css']
})
export class GradeQueryComponent implements OnInit {

  validateForm: FormGroup;
  searchData: FormGroup;

  /*下拉框*/
  private schools;
  private departments;
  private classes;
  private exams;
  private courses;

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

  constructor(private _randomUser: TableServiceService, private fb: FormBuilder, private gradeQueryServerService:GradeQueryServerService) {
  }

  ngOnInit() {

    this.searchData = this.fb.group({
      school: ['', [Validators.required]],
      department: ['', [Validators.required]],
      class: ['', [Validators.required]],
      course: ['', [Validators.required]],
      exam: ['', [Validators.required]]
    });

    this.gradeQueryServerService.getsSchools( data => {
      this.schools = data.[0].results;
      // console.log(  data[0].results instanceof Array)
    })
    //
    // this.schools = [{value: 'cs', label: '计算机学院'},
    //   {value: 'en', label: '外国语学院'},
    //   {value: 'disabled', label: 'Disabled', disabled: true}];
    setTimeout(_=> {
      this.departments = [{value: 'cs', label: '计算机学院'},
        {value: 'en', label: '外国语学院'},
        {value: 'disabled', label: 'Disabled', disabled: true}];
    }, 100);
    this.classes = [{value: 'ct1', label: '计算机1411'},
      {value: 'ai1', label: '人工智能1511'},
      {value: 'disabled', label: 'Disabled', disabled: true}];
    this.courses = [{value: 'algorithm', label: '算法'},
      {value: 'python', label: 'Python'},
      {value: 'disabled', label: 'Disabled', disabled: true}];
    this.exams = [{value: '17181', label: '17-18-1'},
      {value: '17182', label: '17-18-2'},
      {value: 'disabled', label: 'Disabled', disabled: true}];
  }

  /*查询数据*/
  searchClass() {
    console.log(this.schollsId);
    this.serachShow = true;
    this.refreshData();
  }

  /*弹窗*/
  operateData(strs) {
    this.isVisible = true;
    if (strs == "add") {
      this.tabTitle = "添加专业数据";
      this.statusShow = false;
    } else {
      this.tabTitle = "修改专业数据";
      this.statusShow = true;
    }
  }

  /*添加数据*/
  addClass() {
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


  /*关闭窗口*/
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


  /*表格数据操作*/
  refreshData(reset = false) {
    if (reset) {
      this._current = 1;
    }

    this._loading = true;
    const selectedGender = this._filterGender.filter(item => item.value).map(item => item.name);
    this._randomUser.getUsers(this._current, this._pageSize, 'name', this._sortValue, selectedGender, '/api/courseResult').subscribe((data: any) => {
      this._loading = false;
      this._total = data[0].info.total;
      this._dataSet = data[0].results;
      console.log(this._total);
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
