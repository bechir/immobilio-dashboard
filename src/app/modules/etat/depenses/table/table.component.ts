import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-depenses-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() depenses: any[] | null;

  constructor() { }

  ngOnInit(): void {
  }

}
