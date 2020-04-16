import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

import { ChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true
  };

  public barChartLabel: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013'];
  public barChartType: ChartType = 'bar';
  public barChartLegend: boolean = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    {data: [11, 34, 56, 78], label: 'Serie A'},
    {data: [31, 64, 151, 18], label: 'Serie B'}
  ];


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(!this.authService.isAuthenticated()) {
      this.router.navigate(['/auth/signin']);
    }
  }
}
