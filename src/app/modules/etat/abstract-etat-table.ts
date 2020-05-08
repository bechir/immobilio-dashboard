import { Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


export class AbstractEtatTable {
  @Input() items: any[] | null;

  searchInput: string = "";
  isAllChecked: boolean = false;
  selectionExists: boolean = false;

  constructor(private modalService: NgbModal) { }

  openDetails(content) {
    this.modalService.open(content, {
      size: 'lg'
    });
  }

  onToggleChecked(item) {
    item.checked = !item.checked;
    this.isAllChecked = false;
    if(item.checked) {
      this.selectionExists = true
    } else {
      this.selectionExists = false;
      this.items?.forEach(i => {
        if(i.checked) {
          this.selectionExists = true;
          return;
        };
      });
    }
  }

  onToggleCheckedAll() {
    this.isAllChecked = !this.isAllChecked;
    this.items?.map(item => {
      item.checked = this.isAllChecked;
    });
    if(this.isAllChecked) {
      this.selectionExists = true;
    } else {
      this.selectionExists = false
    }
  }
}
