import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {KnowledageManageServiceService} from "../../../serve/title-manage/knowledage-manage-service.service";
import {TitleManageServerService} from "../../../serve/title-manage/title-manage-server.service";
import {NzMessageService} from "ng-zorro-antd";
import {Router} from "@angular/router";

@Component({
  selector: 'app-upload-title',
  templateUrl: './upload-title.component.html',
  styleUrls: ['./upload-title.component.css']
})
export class UploadTitleComponent implements OnInit {
  @ViewChild('equation') equation: ElementRef;

  private eoKnowleagePoint;
  private title_type;
  private degree;
  private title_text;
  private answer_text;
  private title_nickname;
  private title_option;

  private degree_value
  private eoKnowleagePoints;
  private title_types;

  private model_text;
  title = "$$ x_i $$";

  constructor(private knowledageManageServiceService: KnowledageManageServiceService,
              private _message: NzMessageService,
              private router: Router,
              private titleManageServerService: TitleManageServerService) {

  }

  ngOnInit() {
    this.title_types = [{value: '1', label: '单选题'},
      {value: '2', label: '多选题'},
      {value: '3', label: '判断题'},
      {value: '4', label: '填空题'},
      {value: '5', label: '完型填空'},
    ];

    this.searchKnowledage();
  }

  searchKnowledage() {

    this.knowledageManageServiceService.getKnowledage({
      'page': 1,
      'size': 10,
      'subjectId': sessionStorage.getItem("selectedSubject")
    }).subscribe((data: any) => {
      console.log(data)
      if (data.data) {
        console.log(data.data.list)
        this.eoKnowleagePoints = data.data.list;
      }
    });
  }

  // contentChange($event) {
  //   console.log("contentChange：", $event);
  // }
  //
  // editorReady($event) {
  //   console.log("ready：", $event);
  // }
  //
  // test(text: string): void {
  //   console.log(text);
  // }
  submit() {
    if (!this.title_nickname || !this.eoKnowleagePoint || !this.degree || !this.title_text || !this.title_option || !this.answer_text || !this.title_type) {
      this._message.create("error", "不可有空！！！");
    } else {
      const body = {
        name: this.title_nickname,
        knowleagePointId: this.eoKnowleagePoint,
        degree: this.degree,
        title: this.title_text,
        selectOption: this.title_option,
        answoer: this.answer_text,
        typeId: this.title_type,
        subjectId: sessionStorage.getItem("selectedSubject")
      };
      this.titleManageServerService.addTitle(body).subscribe((data: any) => {
        if (data.message == "SUCCESS") {
          this.title_nickname = "";
          this.eoKnowleagePoint = "";
          this.degree = "";
          this.title_text = "";
          this.title_option = "";
          this.answer_text = "";
          this.title_type = "";
          this._message.create("success", "添加成功");
          this.router.navigate(['./upload-title']);
        } else {
          this._message.create("error", "添加失败");
        }
        console.log("添加");
        console.log(body);
      });
    }

  }

  get_degree_value(degree) {
    if (degree <= 2) {
      this.degree_value = "简单";
      this.degree = "0";
    } else if (degree > 2 && this.degree <= 3.5) {
      this.degree_value = "中等";
      this.degree = "1";
    } else {
      this.degree_value = "困难";
      this.degree = "2";
    }
  }

  // // 监听onEditorKeyup事件
  // keyupHandler(event) {
  //   console.log('编辑器的内容：', this.model_text);
  // }

}
