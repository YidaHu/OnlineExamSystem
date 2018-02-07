import {Component, OnInit} from '@angular/core';
import {MathjaxDirective} from "../../../mathjax.directive";
import {KatexOptions} from "ng-katex/src/ng-katex.options";
@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css']

})
export class TitleListComponent implements OnInit {

  private value;
  fractionString:any;
  constructor() {
  }

  ngOnInit() {
    this.fractionString = '$\log_2$';
  }

  equation: string = '\\sum_{i=1}^nx_i';
  equation1: string = '\\log_2';

}
