import { OnInit, Output, EventEmitter, Injectable, Component } from '@angular/core';
import {NgbDate, NgbCalendar, NgbDateParserFormatter, NgbDatepickerI18n, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

import { Client } from 'src/app/models/client';
import { SharedService } from 'src/app/modules/shared/shared.service';
import { DateFormatENPipe, DateFormatFRPipe } from 'src/app/pipes/date.pipe';

const I18N_VALUES = {
  'fr': {
    weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
    months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],
  }
};

@Injectable()
export class I18n {
  language = 'fr';
}

@Injectable()
export class DatepickerI18nFrench extends NgbDatepickerI18n {

  constructor(private _i18n: I18n) {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}

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
    this.filterForm = new FormGroup({
        startDate: new FormControl(this.dateFormatFR.transform(this.formatter.format(this.fromDate))),
        endDate: new FormControl(this.dateFormatFR.transform(this.formatter.format(this.toDate))),
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
      startDate: this.dateFormatEN.transform(params.startDate),
      endDate: this.dateFormatEN.transform(params.endDate),
    };
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
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
}
