import { OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

import { Client } from 'src/app/models/client';
import { SharedService } from 'src/app/modules/shared/shared.service';

export class BaseFilterForm implements OnInit {
  @Output() onFilter: EventEmitter<any> = new EventEmitter();
  @Output() onInitFilterForm: EventEmitter<any> = new EventEmitter();

  clients?: Client[];
  facturesStatus?: any[];

  selectedAgences = [];
  dropdownSettings: IDropdownSettings = {}
  
  filterForm: FormGroup;

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  constructor(
    protected calendar: NgbCalendar,
    protected sharedService: SharedService,
    public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getPrev(calendar.getToday(), 'm');
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 0);
  }

  ngOnInit(): void {
    this.initComponents();
  }

  initComponents(controls?: any): void {
    this.filterForm = new FormGroup({
        clients: new FormControl(''),
        facturesStatus: new FormControl(''),
        ...controls
    });

    this.sharedService.getClients().subscribe(
      (clients: Client[]) => {
        this.clients = clients.map((client: Client) => {
          return {
            ...client,
            name: client.nom?.slice(0, 15) || client.prenom?.slice(0, 15)
          };
        }).filter((client: Client) => client.nom || client.prenom); // Skip blank customer fullname
      },
      error => console.error(error)
    );

    this.sharedService.getFacturesStatus().subscribe(
      status => this.facturesStatus = status,
      error => console.error(error)
    );

    this.onInitFilterForm.emit(this.getFilteredParams());

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Tout séléctionner',
      unSelectAllText: 'Tout effacer',
      itemsShowLimit: 1,
      allowSearchFilter: true,
      searchPlaceholderText: 'Rechercher...'
    };
  }

  onItemSelect(item: any) {
    // console.log(item);
  }

  onSelectAll(items: any[]) {
  }

  doOnFilter() {
    this.onFilter.emit(this.getFilteredParams());
  }

  getFilteredParams(args?: any) {
    let  params = this.filterForm.value;

    params = {
      ...params,
      ...args,
      clients: params.clients ? params.clients.map((c: Client) => c.id).join(',') : '',
      facturesStatus: params.facturesStatus ? params.facturesStatus.map((s: any) => s.id).join(',') : '',
      startDate: `${this.fromDate.year}-${this.fromDate.month}-${this.fromDate.day}`,
      endDate: `${this.toDate.year}-${this.toDate.month}-${this.toDate.day}`
    };

    console.log(params);

    return params;
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    console.log(parsed);
    
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
}
