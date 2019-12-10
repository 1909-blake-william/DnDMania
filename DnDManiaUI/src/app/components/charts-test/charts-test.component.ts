import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-charts-test',
  templateUrl: './charts-test.component.html',
  styleUrls: ['./charts-test.component.css']
})
export class ChartsTestComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Current Health', 'Lost Health'];
  public chartColors: Array<any> = [
    {
      backgroundColor: ['red', 'grey'],
      borderWidth: [0, 0]
    },
    {
      backgroundColor: ['red', 'grey'],
      borderWidth: [0, 0]
    },
    {
      backgroundColor: ['red', 'grey'],
      borderWidth: [0, 0]
    },
  ];

  public doughnutChartData: MultiDataSet = [
    [30, 28],
    [30, 28],
    [0, 0]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  ngOnInit() {
  }

}
