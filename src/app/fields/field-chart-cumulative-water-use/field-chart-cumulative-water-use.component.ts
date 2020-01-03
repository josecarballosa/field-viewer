import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { BaseChartDirective, Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Field } from '../shared/field.model';

@Component({
  selector: 'app-field-chart-cumulative-water-use',
  templateUrl: './field-chart-cumulative-water-use.component.html',
  styleUrls: ['./field-chart-cumulative-water-use.component.scss'],
})
export class FieldChartCumulativeWaterUseComponent implements OnInit {
  @Input() field: Field;

  chartLabels: Label[] = [];

  chartData: ChartDataSets[] = [
    { data: [], label: 'total' },
    { data: [], label: 'acc_eta' },
    { data: [], label: 'irr' },
    { data: [], label: 'precip' },
  ];

  chartColors: Color[] = [
    {
      backgroundColor: 'rgba(77, 201, 246, 0.1)',
      borderColor: 'rgba(77, 201, 246)',
      pointRadius: 0 /* disable points */,
    },
    {
      backgroundColor: 'rgba(246, 112, 25, 0.1)',
      borderColor: 'rgba(246, 112, 25)',
      pointRadius: 0 /* disable points */,
    },
    {
      backgroundColor: 'rgba(106, 112, 25, 0.1)',
      borderColor: 'rgba(106, 112, 25)',
      pointRadius: 0 /* disable points */,
    },
    {
      backgroundColor: 'rgba(75, 192, 192, 0.1)',
      borderColor: 'rgba(75, 192, 192)',
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
      const water = this.field.HB_ImaWater.water;

      this.chartLabels = water.map(({ date }) => date);

      this.chartData[0].data = water.map(({ total }) => total);
      this.chartData[1].data = water.map(({ irr }) => irr);
      this.chartData[2].data = water.map(({ acc_eta }) => acc_eta);
      this.chartData[3].data = water.map(({ precip }) => precip);

      this.chart.update();
    }
  }
}
