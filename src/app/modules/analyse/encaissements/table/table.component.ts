import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-analyse-enc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() bills: any[] | null;
  constructor() { }

  ngOnInit(): void {
  }

}
