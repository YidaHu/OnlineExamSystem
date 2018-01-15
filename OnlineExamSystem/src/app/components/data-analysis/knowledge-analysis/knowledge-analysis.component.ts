import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-knowledge-analysis',
  templateUrl: './knowledge-analysis.component.html',
  styleUrls: ['./knowledge-analysis.component.css']
})
export class KnowledgeAnalysisComponent implements OnInit {

  //下拉框数据
  private departments;
  private classes;
  private students;
  private courses;
  private semesters;

  constructor() {
  }

  ngOnInit() {
    this.departments = [{value: 'cs', label: '计算机学院'},
      {value: 'en', label: '外国语学院'},
      {value: 'disabled', label: 'Disabled', disabled: true}];
    this.classes = [{value: 'ct1', label: '计算机1411'},
      {value: 'ai1', label: '人工智能1511'},
      {value: 'disabled', label: 'Disabled', disabled: true}];
    this.students = [{value: 'huyd', label: '胡义达'},
      {value: 'zhang', label: '张三'},
      {value: 'disabled', label: 'Disabled', disabled: true}];
    this.courses = [{value: 'algorithm', label: '算法'},
      {value: 'python', label: 'Python'},
      {value: 'disabled', label: 'Disabled', disabled: true}];
    this.semesters = [{value: '17181', label: '17-18-1'},
      {value: '17182', label: '17-18-2'},
      {value: 'disabled', label: 'Disabled', disabled: true}];
  }

  option1 = {
    title: {
      text: '成绩分布',
      left: 'left'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    legend: {
      data: ['大二上', '大二下', '大三上']
    },
    xAxis: [
      {
        type: 'category',
        data: ['不及格', '及格', '中等', '良好', '优秀'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '分数',
        min: 0,
        max: 100,
        interval: 10,
        axisLabel: {
          formatter: '{value} 分'
        }
      },
      {
        type: 'value',
        name: '人数',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: '{value} 人'
        }
      }
    ],
    series: [
      {
        name: '大二上',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6,]
      },
      {
        name: '大二下',
        type: 'bar',
        data: [2.6, 5.9, 9.0, 26.4, 28.7,]
      },
      {
        name: '大三上',
        type: 'bar',
        yAxisIndex: 1,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2,]
      }
    ]
  };
  option2 = {
    title: {
      text: '班级科目均衡性'
    },
    tooltip: {},
    legend: {
      data: ['年级平均', '班级平均']
    },
    radar: {
      // shape: 'circle',
      name: {
        textStyle: {
          color: '#fff',
          backgroundColor: '#999',
          borderRadius: 3,
          padding: [3, 5]
        }
      },
      indicator: [
        {name: '语文', max: 100},
        {name: '数学', max: 100},
        {name: '英语', max: 100},
        {name: '物理', max: 100},
        {name: '化学', max: 100},
        {name: '政治', max: 100},
        {name: '历史', max: 100},
        {name: '地理', max: 100},
      ]
    },
    series: [{
      name: '年级平均 vs 班级平均',
      type: 'radar',
      // areaStyle: {normal: {}},
      data: [
        {
          value: [70, 68, 60, 75, 80, 81, 72, 91],
          name: '年级平均'
        },
        {
          value: [77, 88, 99, 79, 96, 85, 90, 93],
          name: '班级平均'
        }
      ]
    }]
  };
  option3 = {
    title: {
      text: '班级一次考试学生成绩分布情况',
      subtext: '考试',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['不及格', '及格', '中等', '良好', '优秀']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          {value: 10, name: '不及格'},
          {value: 40, name: '及格'},
          {value: 30, name: '中等'},
          {value: 20, name: '良好'},
          {value: 10, name: '优秀'}
        ],
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
  option4 = {
    title: {
      text: '对数轴示例',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
      left: 'left',
      data: ['2的指数', '3的指数']
    },
    xAxis: {
      type: 'category',
      name: 'x',
      splitLine: {show: false},
      data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    yAxis: {
      type: 'log',
      name: 'y'
    },
    series: [
      {
        name: '3的指数',
        type: 'line',
        data: [1, 33, 24, 27, 81, 247, 741, 2223, 6669]
      },
      {
        name: '2的指数',
        type: 'line',
        data: [1, 2, 4, 50, 16, 32, 64, 128, 256]
      },

    ]
  };


}
