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
    this.option = {
      title: {
        text: '同名数量统计',
        subtext: '纯属虚构',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        // data: this.data.legendData
        data: []
      },
      series: [
        {
          name: '姓名',
          type: 'pie',
          radius: '55%',
          center: ['40%', '50%'],
          // data:this.data.seriesData,
          data:[],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }

  ngOnInit() {
    this.data = this.tableServiceService.genData(50);
    this.option['legend']['data'] = this.data.legendData;
    this.option['series']['data'] = this.data.seriesData;
    console.log(this.option)
  }






}
