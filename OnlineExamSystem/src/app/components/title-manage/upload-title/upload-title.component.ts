import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-upload-title',
  templateUrl: './upload-title.component.html',
  styleUrls: ['./upload-title.component.css']
})
export class UploadTitleComponent implements OnInit {
  @ViewChild('equation') equation: ElementRef;

  private model_text;
  title = "$$ x_i $$";

  constructor() {
  }

  ngOnInit() {
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

  // // 监听onEditorKeyup事件
  // keyupHandler(event) {
  //   console.log('编辑器的内容：', this.model_text);
  // }

}
