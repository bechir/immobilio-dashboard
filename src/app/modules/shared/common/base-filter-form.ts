import { OnInit, Output, EventEmitter } from '@angular/core';
import {NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

import { Client } from 'src/app/models/client';
import { SharedService } from 'src/app/modules/shared/shared.service';
import { DateFormatENPipe, DateFormatFRPipe } from 'src/app/pipes/date.pipe';

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
    protected dateFormatEN: DateFormatENPipe,
    protected dateFormatFR: DateFormatFRPipe,
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

    this.filterForm = new FormGroup({
      startDate: new FormControl(this.dateFormatFR.transform(this.formatter.format(this.fromDate))),
      endDate: new FormControl(this.dateFormatFR.transform(this.formatter.format(this.toDate))),
      clients: new FormControl(this.clients),
      facturesStatus: new FormControl(''),
      ...controls
  });

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

  onItemSelect(item) {
    // console.log(item);
  }

  onSelectAll(items) {
  }

  doOnFilter() {
    this.onFilter.emit(this.getFilteredParams());
  }

  getFilteredParams(args?: any) {
    let  params = this.filterForm.value;

    return {
      ...params,
      ...args,
      clients: params.clients ? params.clients.map((c: Client) => c.id).join(',') : '',
      facturesStatus: params.facturesStatus ? params.facturesStatus.map((s: any) => s.id).join(',') : '',
      startDate: this.parseDateEN(params.startDate),
      endDate: this.parseDateEN(params.endDate),
    };
  }

  parseDateEN(date: Date | string) {
    if(typeof(date) == 'string') {
      return this.dateFormatEN.transform(date);
    } else {
      return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
    }
  }
}
