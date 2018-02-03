import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  private root = false;
  private admin = false;
  private teacher = false;
  private student = false;

  isCollapsed = false;

  constructor() {
  }

  ngOnInit() {
    var status = sessionStorage.getItem("roleValue");
    if (status == "1") {
      this.root = true;
      this.admin = false;
      this.teacher = false;
      this.student = false;

    } else if (status == "2") {
      this.root = false;
      this.admin = true;
      this.teacher = false;
      this.student = false;
    } else if (status == "3") {
      this.root = false;
      this.admin = false;
      this.teacher = true;
      this.student = false;
    } else {
      this.root = false;
      this.admin = false;
      this.teacher = false;
      this.student = true;
    }
  }

  isRoot(){
    return this.root;
  }
  isAdmin(){
    return this.admin;
  }
  isRootAdmin() {
    return this.root || this.admin;
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
}
