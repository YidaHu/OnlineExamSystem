import {Component, OnInit} from '@angular/core';
import {Paper} from "../paper-detail/paper";

const PAPERS: Paper[] = [
  {id: 1, name: '试卷1', content: "试卷1Nice"},
  {id: 2, name: '试卷2', content: "试卷2Nice"},
  {id: 3, name: '试卷3', content: "试卷3Nice"},
  {id: 4, name: '试卷4', content: "试卷4Nice"},
  {id: 5, name: '试卷5', content: "试卷5Nice"},
];

@Component({
  selector: 'app-paper-history',
  templateUrl: './paper-history.component.html',
  styleUrls: ['./paper-history.component.css']
})
export class PaperHistoryComponent implements OnInit {

  papers = PAPERS;

  constructor() {
  }

  ngOnInit() {
    // this.goods = [{departmentId: 1, department_name: "", id: 2, name: "数据结构", schoolId: 3}, {
    //   departmentId: 1,
    //   department_name: "",
    //   id: 1,
    //   name: "软件工程",
    //   schoolId: 3
    // }];
  }

}
