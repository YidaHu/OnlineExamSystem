import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css']
})
export class TitleListComponent implements OnInit {

  private value ;

  constructor() { }

  ngOnInit() {
    this.value = '$'+'\log_2'+'$';
  }

}
