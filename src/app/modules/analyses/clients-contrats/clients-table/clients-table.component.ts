import { Component } from '@angular/core';
import { BaseTable } from 'src/app/modules/shared/common/base-table';

@Component({
  selector: 'app-analyse-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss']
})
export class AnalyseClientsTableComponent extends BaseTable{
  title = 'Analyse Clients'
}
