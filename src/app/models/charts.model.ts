import { SingleDataSet, Label } from 'ng2-charts';
import { ChartDataSets, ChartColor, ChartType } from 'chart.js';

export interface PieChart {
    data?: SingleDataSet;
    label?: Label[];
    sum?: number;
}

export interface BarChart {
    datasets?: ChartDataSets[];
    labels?: Label[];
    color?: ChartColor;
    legend: boolean;
}