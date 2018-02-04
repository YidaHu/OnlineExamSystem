import {Component, OnInit} from '@angular/core';
import {TableServiceService} from "../../../serve/table-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {SchoolManageServerService} from "../../../serve/information-manage/school-manage-server.service";
import {KnowledageManageServiceService} from "../../../serve/title-manage/knowledage-manage-service.service";
import {CourseManageServerService} from "../../../serve/information-manage/course-manage-server.service";

@Component({
  selector: 'app-knowledage-manage',
  templateUrl: './knowledage-manage.component.html',
  styleUrls: ['./knowledage-manage.component.css']
})
export class KnowledageManageComponent implements OnInit {

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
  private subjects;
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
              private fb: FormBuilder,
              private knowledageManageServerService: KnowledageManageServiceService,
              private courseManageServerService: CourseManageServerService,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.subjects = [{value: 'jack', label: 'Jack'},
      {value: 'lucy', label: 'Lucy'},
      {value: 'disabled', label: 'Disabled', disabled: true}];
    this.validateForm = this.fb.group({
      knowledge_modal: ['', [Validators.required]],
      subject_modal: ['', [Validators.required]],
      is_adult: ['', [Validators.required]]
    });
    //教师获取科目
    this.courseManageServerService.getCourseFomTeacher({
      'page': 1,
      'size': 10,
    }).subscribe((data: any) => {

      console.log(data)
      if (data.data) {
        this.subjects = data.data.list;
      }
    });
    this.searchKnowledage();
  }

  //查询数据
  searchKnowledage() {
    // console.log(this.subjectsId);
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
      // this.schoolId = this.subjects[0];
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
      this.knowledageManageServerService.updateKnowledage(body).subscribe((data: any) => {
        console.log("更新");
        console.log(body);
      });
    } else {
      const body = {
        loginName: this.loginName_modal, realName: this.realName_modal,
        password: this.password_modal, schoolId: this.school_modal, gender: this.gender_modal
      };
      this.knowledageManageServerService.addKnowledage(body).subscribe((data: any) => {
        console.log("添加");
        console.log(body);
      });
    }
    // console.log(this.validateForm.value);
    this.validateForm.reset();
    // console.log(this.validateForm.value)
    this.isVisible = false;
    this.searchKnowledage();
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
    this.knowledageManageServerService.getKnowledage({
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
    this.knowledageManageServerService.deleteKnowledage({id: id}).subscribe((data: any) => {
      // console.log(data)
    });
    this.searchKnowledage();
    // this.refreshData(true);
  };

}
