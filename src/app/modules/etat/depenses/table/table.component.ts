import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-etat-depenses-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() depenses: any[] | null;

  searchInput: string = "";

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openDetails(content) {
    this.modalService.open(content, {
      size: 'lg'
    });
  }
}
