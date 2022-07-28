import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.scss'],
})
export class MyLineChartComponent {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['25/05/2021', '26/05/2021', '27/05/2021','28/05/2021'],
    datasets: [
      {
        data: [483, 483, 483, 483],
        label: 'Arroz Elaborado 1',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
      },
      {
        data: [481, 481, 481, 481],
        label: 'Arroz Elaborado 2',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
      },
      {
        data: [486, 486, 486, 486],
        label: 'Arroz Elaborado 3',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };
  public lineChartLegend = true;

  constructor() {}

  ngOnInit() {}
}
