import {Component, OnInit} from '@angular/core';
import {TableServiceService} from "../../../serve/table-service.service";

@Component({
  selector: 'app-score-analysis',
  templateUrl: './score-analysis.component.html',
  styleUrls: ['./score-analysis.component.css']
})
export class ScoreAnalysisComponent implements OnInit {
  private data;
  private option;

  constructor(private tableServiceService: TableServiceService) {

  }

  ngOnInit() {
    this.option = this.tableServiceService.genData(50);

  }


}
