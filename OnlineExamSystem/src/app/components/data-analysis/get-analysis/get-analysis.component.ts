import {Component, OnInit} from '@angular/core';
import {DataAnalysisServiceService} from "../../../serve/data-analysis-service.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-get-analysis',
  templateUrl: './get-analysis.component.html',
  styleUrls: ['./get-analysis.component.css']
})
export class GetAnalysisComponent implements OnInit {
  searchData:FormGroup;
  //下拉框数据
  private departments = [];
  private classes;
  private students;
  private courses;
  private semesters;
  private department;

  private option1;
  private option2;
  private option3;
  private option4;



  constructor(private dataAnalysisService: DataAnalysisServiceService,private fb: FormBuilder) {
  }

  ngOnInit() {
    this.searchData = this.fb.group({
      department: ['', [Validators.required]],
      class: ['', [Validators.required]],
      student: ['', [Validators.required]],
      semester: ['', [Validators.required]],
      course: ['', [Validators.required]]
    });

    setTimeout(_=> {
      this.departments = [{value: 'cs', label: '计算机学院'},
        {value: 'en', label: '外国语学院'},
        {value: 'disabled', label: 'Disabled', disabled: true}];
      this.department = this.departments[0];
    }, 100);
    this.classes = [{value: 'ct1', label: '计算机1411'},
      {value: 'ai1', label: '人工智能1511'},
      {value: 'disabled', label: 'Disabled', disabled: true}];
    this.students = [{value: 'huyd', label: '胡义达'},
      {value: 'zhang', label: '张三'},
      {value: 'disabled', label: 'Disabled', disabled: true}];
    this.courses = [{value: 'algorithm', label: '算法'},
      {value: 'python', label: 'Python'},
      {value: 'disabled', label: 'Disabled', disabled: true}];
    this.semesters = [{value: '17181', label: '17-18-1'},
      {value: '17182', label: '17-18-2'},
      {value: 'disabled', label: 'Disabled', disabled: true}];
  }

  searchGetAnalysis() {
    // alert(this.department.label);
    // console.log(this.department.label);
    this.option1 = this.dataAnalysisService.getDataAnalysisOption1();
    this.option2 = this.dataAnalysisService.getDataAnalysisOption2();
    this.option3 = this.dataAnalysisService.getDataAnalysisOption3();
    this.option4 = this.dataAnalysisService.getDataAnalysisOption4();
  }


}
