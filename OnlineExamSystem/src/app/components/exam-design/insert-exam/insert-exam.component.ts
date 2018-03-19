import {Component, OnInit} from '@angular/core';
import {NzMessageService} from "ng-zorro-antd";
import {InsertExamService} from "../../../serve/exam-design/insert-exam.service";
import {DesignPaperService} from "../../../serve/exam-design/design-paper.service";

@Component({
  selector: 'app-insert-exam',
  templateUrl: './insert-exam.component.html',
  styleUrls: ['./insert-exam.component.css']
})
export class InsertExamComponent implements OnInit {

  _date = null;
  private serachShow = false;

  private _examName;
  private _startTime;
  private _endTime;
  private _duration;
  private _examPaper;
  private examPapers;

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

  constructor(private _message: NzMessageService,
              private designPaperService: DesignPaperService,
              private insertExamService: InsertExamService) {
  }

  ngOnInit() {
    this.serachShow = true;

    this.designPaperService.getExampaper({
      'page': 1,
      'size': 10,
      'subjectId': sessionStorage.getItem("selectedSubject"),
    }).subscribe((data: any) => {

      console.log(data)
      this.examPapers = data.data.list;

    });

    this.searchExam();


  }

  //查询数据
  searchExam() {
    // console.log(this.schollsId);
    this.serachShow = true;
    this.refreshData(true);
  }

  changeTime(time) {
    let year = time.getFullYear() < 10 ? ("0" + time.getFullYear()) : time.getFullYear();
    let month = (time.getMonth() + 1) < 10 ? ("0" + (time.getMonth() + 1)) : (time.getMonth() + 1);
    let day = time.getDate() < 10 ? ("0" + time.getDate()) : time.getDate();
    let hours = time.getHours() < 10 ? ("0" + time.getHours()) : time.getHours();
    let minutes = (time.getMinutes() ) < 10 ? ("0" + (time.getMinutes() )) : (time.getMinutes() );
    let mis = time.getSeconds() < 10 ? ("0" + time.getSeconds()) : time.getSeconds();
    return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + mis;
  }

  submit() {
    if (this._examName && this._startTime && this._duration) {
      console.log(this._examName + " " + new Date(this._startTime).getHours() + " " + (this._endTime).toISOString() + " " + this._duration + " " + this._examPaper);
      console.log(new Date().toISOString());
      let subjectId = sessionStorage.getItem("selectedSubject");
      let time1 = this.changeTime(new Date(this._startTime));
      let time2 = this.changeTime(new Date(this._endTime));

      const body = {
        startTime: time1,
        endTime: time2,
        duration: this._duration,
        paperId: this._examPaper,
        subjectId: subjectId,
        name: this._examName,
      };
      this.insertExamService.insertExam(body).subscribe((data: any) => {
        console.log("添加");
        console.log(body);
        console.log(data);
      });
    } else {
      this._message.create("error", "不能为空!!!");
    }
  }


  /*表格数据操作*/
  refreshData(reset) {
    if (reset) {
      this._current = 1;
    }

    this._loading = true;
    const selectedGender = this._filterGender.filter(item => item.value).map(item => item.name);
    this.insertExamService.getExam({
      'page': 1,
      'size': 10,
      'subjectId': sessionStorage.getItem("selectedSubject"),
    }).subscribe((data: any) => {

      console.log(data)
      this._loading = false;
      // this._total = data.data.endRow;
      this._dataSet = data.data.list;

    });
  }

}


