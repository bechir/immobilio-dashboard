import { Component } from '@angular/core';
import { BaseTable } from 'src/app/modules/shared/common/base-table';

@Component({
  selector: 'app-analyse-espaces-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class EspacesLocatifsTableComponent extends BaseTable {
  title = 'Espaces Locatifs'
}
