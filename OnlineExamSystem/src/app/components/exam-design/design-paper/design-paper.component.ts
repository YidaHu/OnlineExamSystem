import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-design-paper',
  templateUrl: './design-paper.component.html',
  styleUrls: ['./design-paper.component.css']
})
export class DesignPaperComponent implements OnInit {

  private degrees;

  constructor() {
  }

  ngOnInit() {
    this.degrees = [
      {label: '1星难度', value: '0.1'},
      {label: '2星难度', value: '0.2'},
      {label: '3星难度', value: '0.3'},
      {label: '4星难度', value: '0.4'},
      {label: '5星难度', value: '0.5'},
      {label: '6星难度', value: '0.6'},
      {label: '7星难度', value: '0.7'},
      {label: '8星难度', value: '0.8'},
      {label: '9星难度', value: '0.9'},
      {label: '10星难度', value: '1.0'},
      {value: 'disabled', label: 'Disabled', disabled: true}];
  }

}
