import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-toolbar',
  templateUrl: './table-toolbar.component.html',
  styleUrls: ['./table-toolbar.component.scss']
})
export class TableToolbarComponent implements OnInit {
  @Input() isVisible: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
