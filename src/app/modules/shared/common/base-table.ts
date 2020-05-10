import { Input, ViewChild, ElementRef, Predicate } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as xlsx from 'xlsx';

export class BaseTable {
  @ViewChild('itemsTable', { static: false}) itemsTable: ElementRef;

  @Input() items: any[] | null;
  selectedItems: any[] = [];
  nbSelections: number = 0;

  title: string = 'Données';

  searchInput: string = "";
  isAllChecked: boolean = false;
  selectionExists: boolean = false;

  constructor(private modalService: NgbModal) { }

  onToolbarAction(action) {
    this.selectedItems = this.items.filter(item => item.checked);

    setTimeout(() => {
      switch (action) {
        case 'excel':
          return this.exportToExcel();
        case 'pdf':
          return this.saveAsPDF();
        case 'email':
          return this.sendEmail();
        case 'sms':
          return this.sendSMS();
        case 'print':
          return this.print();
        default: break;
      }
    }, 300);
  }

  exportToExcel() {
    console.log('excel');
    
    const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(this.itemsTable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws);
    xlsx.writeFile(wb, this.title + '.xlsx')
  }

  public saveAsPDF() {
    const doc = new jsPDF('p', 'pt', '4');

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const pdfTable = this.itemsTable.nativeElement;
    autoTable(pdfTable, {html: pdfTable});

    doc.fromHTML(pdfTable.innerHTML, 15, 15, {
      width: 200,
      'elementHandlers': specialElementHandlers
    });

    doc.save(this.title + '.pdf');
  }

  sendEmail() {}

  sendSMS() {}

  print() {
    var divToPrint = document.getElementById("itemsTable");  
    const newWin = window.open("");  
    newWin.document.write(divToPrint.outerHTML);  
    newWin.print();  
    newWin.close(); 
  }

  openDetails(content) {
    this.modalService.open(content, {
      size: 'lg'
    });
  }

  onToggleChecked(item) {
    item.checked = !item.checked;
    this.isAllChecked = false;
    if(item.checked) {
      this.selectionExists = true;
      ++this.nbSelections;
    } else {
      this.selectionExists = false;
      --this.nbSelections;
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
      this.nbSelections = this.items.length
    } else {
      this.selectionExists = false
      this.nbSelections = 0;
    }
  }
}
