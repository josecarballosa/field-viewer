import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { BaseChartDirective, Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Field } from '../shared/field.model';

@Component({
  selector: 'app-field-water-depletion',
  templateUrl: './field-water-depletion.component.html',
  styleUrls: ['./field-water-depletion.component.scss'],
})
export class FieldWaterDepletionComponent implements OnInit {
  @Input() field: Field;

  chartLabels: Label[] = [];

  chartData: ChartDataSets[] = [
    { data: [], label: 'depletion' },
    { data: [], label: 'max. allowable' },
    { data: [], label: 'permanent wilting' },
  ];

  chartColors: Color[] = [
    {
      backgroundColor: 'rgba(0, 160, 222, 0.1)',
      borderColor: 'rgba(0, 160, 222)',
      pointRadius: 0 /* disable points */,
    },
    {
      backgroundColor: 'rgba(0, 116, 60, 0.1)',
      borderColor: 'rgba(0, 116, 60)',
      pointRadius: 0 /* disable points */,
    },
    {
      backgroundColor: 'rgba(182, 30, 34, 0.1)',
      borderColor: 'rgba(182, 30, 34)',
      pointRadius: 0 /* disable points */,
    },
  ];

  chartOptions: ChartOptions = {
    // responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'month',
            displayFormats: {
              month: 'MMM',
            },
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'mm',
          },
          ticks: {
            beginAtZero: true,
            reverse: true,
          },
          gridLines: {
            drawOnChartArea: false,
          },
        },
      ],
    },
    elements: {
      line: {
        tension: 0, // disables bezier curves
      },
    },
  };

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  ngOnInit() {
    if (this.field) {
      this.chartLabels = this.field.HB_ImaSeriesDEP.series.map(
        ([t, _]) => '' + t,
      );

      const max_allow_dep = this.field.HB_Imx[0].max_allow_dep;
      const perm_wilt_pt = this.field.HB_Imx[0].perm_wilt_pt;

      this.chartData[0].data = this.field.HB_ImaSeriesDEP.series.map(
        ([_, y]) => +y,
      );
      this.chartData[1].data = this.chartLabels.map(_ => max_allow_dep);
      this.chartData[2].data = this.chartLabels.map(_ => perm_wilt_pt);

      this.chart.update();
    }
  }
}
