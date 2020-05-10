import { Component } from '@angular/core';
import { BaseTable } from 'src/app/modules/shared/common/base-table';

@Component({
  selector: 'app-analyse-expenses-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class AnalyseExpensesTableComponent extends BaseTable{
  title = 'Analyse des Depenses'
}
