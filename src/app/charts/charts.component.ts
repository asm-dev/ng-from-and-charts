import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  width = 600;

  lineChartData = [
    {
      name: 'Ventas',
      series: [
        { name: 'Enero', value: 5000 },
        { name: 'Febrero', value: 7200 },
        { name: 'Marzo', value: 6700 },
      ],
    },
  ];

  barChartData = [
    { name: 'Producto A', value: 8940 },
    { name: 'Producto B', value: 5300 },
    { name: 'Producto C', value: 6200 },
  ];

  ngOnInit() {
    this.updateWidth();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateWidth();
  }

  updateWidth() {
    const max = 600;
    const padding = 60;
    this.width = Math.min(window.innerWidth - padding, max);
  }
}
