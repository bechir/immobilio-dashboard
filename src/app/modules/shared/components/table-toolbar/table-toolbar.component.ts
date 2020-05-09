import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-toolbar',
  templateUrl: './table-toolbar.component.html',
  styleUrls: ['./table-toolbar.component.scss']
})
export class TableToolbarComponent implements OnInit {
  @Input() isVisible: boolean = true
  @Output() onAction: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  actionClicked(clickedButton: string) {
    this.onAction.emit(clickedButton);
  }
}
