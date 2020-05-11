import { Component } from '@angular/core';
import { BaseTable } from 'src/app/modules/shared/common/base-table';

@Component({
  selector: 'app-etats-situations-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class EtatSituationsTableComponent extends BaseTable {
  title = 'Situations des Caisses';

  // displayedColumns = ['caisse', 'reference', 'libelle', 'date', 'nature', 'solde']
}
