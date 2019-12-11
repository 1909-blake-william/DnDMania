import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MultiDataSet, Label, BaseChartDirective } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-combat-event-chart',
  templateUrl: './combat-event-chart.component.html',
  styleUrls: ['./combat-event-chart.component.css']
})
export class CombatEventChartComponent implements OnInit, OnChanges {
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  @Input('data') data: any[];
  @Input('type') type: string;
  @Input('hpColor') hpColor: string;

  public doughnutChartLabels: Label[] = ['Current Health', 'Lost Health'];
  public chartColors: Array<any> = [
    {
      backgroundColor: [this.hpColor, 'grey']
    }
  ];

  public doughnutChartData: MultiDataSet = [
    [0, 0]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartOptions: ChartOptions = {
    responsive: true
  };

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  ngOnInit() {
    // this.doughnutChartData[0] = this.data;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.data = changes.data.currentValue;
    this.doughnutChartData = [this.data];
    this.chartColors = [
      {
        backgroundColor: [this.hpColor, 'grey']
      }
    ];
    this.chart.update();
  }
}
