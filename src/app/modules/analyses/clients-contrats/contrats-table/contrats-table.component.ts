import { Component } from '@angular/core';
import { BaseTable } from 'src/app/modules/shared/common/base-table';

@Component({
  selector: 'app-analyse-contrats-table',
  templateUrl: './contrats-table.component.html',
  styleUrls: ['./contrats-table.component.scss']
})
export class AnalyseContratsTableComponent extends BaseTable {
  title = 'Analyse Contrats'
}
