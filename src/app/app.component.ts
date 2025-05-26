import { Component } from '@angular/core';
import { ChartsComponent } from './charts/charts.component';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [ChartsComponent, DialogComponent],
})
export class AppComponent {
  title = 'charts-app';
}
