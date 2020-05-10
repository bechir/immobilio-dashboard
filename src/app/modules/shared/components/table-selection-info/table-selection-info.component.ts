import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-selection-info',
  templateUrl: './table-selection-info.component.html',
  styleUrls: ['./table-selection-info.component.scss']
})
export class TableSelectionInfoComponent implements OnInit {
  @Input() nbSelections: number = 0;
  @Input() totalItems: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
