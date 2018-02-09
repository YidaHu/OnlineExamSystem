import {Component, OnInit} from '@angular/core';
import {KatexOptions} from "ng-katex/src/ng-katex.options";
@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css']

})
export class TitleListComponent implements OnInit {

  sum: string;
  result: any;
  fractionString: any;

  constructor() {
  }

  ngOnInit() {
    this.fractionString = '$\log_2$';
  }

  // equation: string = '\\sum_{i=1}^nx_i';
  equation1: string = '\\log_2';

  value: string = '这是一个数学公式&\sum_{i=1}^nx_i&求解';

  title: string = 'ng-katex';
  url: string = 'https://github.com/garciparedes/ng-katex';
  equation: string = 'c = \\pm\\sqrt{a^2 + b^2}';
  options: KatexOptions = {
    displayMode: true,
  };

  strFormatLatex() {
    this.result = this.value.split("&");
    for (var i = 0; i < this.result.length; i++) {
      if (this.result[i][0] == '\\') {
        this.sum = this.result[i];
      } else {

      }

    }
  }

}
