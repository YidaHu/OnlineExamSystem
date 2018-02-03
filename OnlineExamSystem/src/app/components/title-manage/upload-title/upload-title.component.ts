import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {KnowledageManageServiceService} from "../../../serve/title-manage/knowledage-manage-service.service";

@Component({
  selector: 'app-upload-title',
  templateUrl: './upload-title.component.html',
  styleUrls: ['./upload-title.component.css']
})
export class UploadTitleComponent implements OnInit {
  @ViewChild('equation') equation: ElementRef;

  private degree;
  private degree_value
  private eoKnowleagePoints;

  private title_types;

  private model_text;
  title = "$$ x_i $$";

  constructor(private knowledageManageServiceService: KnowledageManageServiceService) {

  }

  ngOnInit() {
    this.title_types = [{value: '1', label: '单选题'},
      {value: '2', label: '多选题'},
      {value: '3', label: '判断题'},
      {value: '4', label: '填空题'},
    ];

    this.searchKnowledage();
  }

  searchKnowledage() {
    this.knowledageManageServiceService.getKnowledage({
      'page': 1,
      'size': 10,
    }).subscribe((data: any) => {

      console.log(data)
      if (data.data) {
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
  getAllHtml() {
    console.log('编辑器的：', this.model_text);
    this.title = this.model_text;
    // MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.equation.nativeElement]);
    // MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementsByClassName("answers")]);
  }

  get_degree_value(degree) {
    if (degree <= 2) {
      this.degree_value = "简单";
    } else if (degree > 2 && this.degree <= 3.5) {
      this.degree_value = "中等";
    } else {
      this.degree_value = "困难";
    }
  }

  // // 监听onEditorKeyup事件
  // keyupHandler(event) {
  //   console.log('编辑器的内容：', this.model_text);
  // }

}
