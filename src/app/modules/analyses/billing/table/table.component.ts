import { Component } from '@angular/core';
import { BaseTable } from 'src/app/modules/shared/common/base-table';

@Component({
  selector: 'app-analyse-bill-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class AnalyseBillingTableComponent extends BaseTable {
  title = 'Facturations';
}
