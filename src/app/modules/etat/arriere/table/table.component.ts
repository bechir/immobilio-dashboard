import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-etat-arriere-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() arrierees: any[] | null;

  constructor() { }

  ngOnInit(): void {
  }

}
