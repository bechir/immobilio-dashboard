import { SingleDataSet, Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';

export interface PieChart {
    data?: SingleDataSet;
    label?: Label[];
    sum?: number;
}

export interface BarChart {
    datasets?: ChartDataSets[];
    labels?: Label[];
    legend: boolean;
}