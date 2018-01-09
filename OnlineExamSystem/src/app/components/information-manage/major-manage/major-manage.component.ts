import { Component, OnInit } from '@angular/core';
import {TableServiceService} from "../../../serve/table-service.service";

@Component({
  selector: 'app-major-manage',
  templateUrl: './major-manage.component.html',
  styleUrls: ['./major-manage.component.css']
})
export class MajorManageComponent implements OnInit {
  private scholls;
  private  schollsId;
  private serachShow = false; //控制是否生成table
  private isVisible = false; //tab窗口
  _current = 1;
  _pageSize = 10;
  _total = 1;
  _dataSet = [];
  _loading = true;
  _sortValue = null;
  _filterGender = [
    { name: 'male', value: false },
    { name: 'female', value: false }
  ];

  constructor(private _randomUser: TableServiceService) { }

  ngOnInit() {
    this.scholls = [{ value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'disabled', label: 'Disabled', disabled: true }];
  }

  //查询数据
  searchMajor() {
    console.log(this.schollsId);
    this.serachShow = true;
    this.refreshData();
  }

  //添加数据
  addMajor() {
    console.log('添加成功')
    this.isVisible = false;
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
    this._randomUser.getUsers(this._current, this._pageSize, 'name', this._sortValue, selectedGender).subscribe((data: any) => {
      this._loading = false;
      this._total = data[0].info.total;
      this._dataSet = data[0].results;
      console.log(this._total)
    })
  }
}
