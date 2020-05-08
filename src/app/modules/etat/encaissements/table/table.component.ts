import { Component } from '@angular/core';
import { AbstractEtatTable } from '../../abstract-etat-table';

@Component({
  selector: 'app-etat-encaissements-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends AbstractEtatTable {
}
