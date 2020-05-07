import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ArriereService } from './arriere.service';
import { Agence } from 'src/app/models/agence';
import { Client } from 'src/app/models/client';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-arriere',
  templateUrl: './arriere.component.html',
  styleUrls: ['./arriere.component.scss']
})
export class ArriereComponent implements OnInit, OnDestroy {

  arrierees: any[] | null = null;
  private arriereesObserver: Subscription;

  agences?: Agence[];
  clients?: Client[];
  
  filterForm: FormGroup;

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  constructor(
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter,
    private service: ArriereService,
    private sharedService: SharedService) {
    this.fromDate = calendar.getPrev(calendar.getToday(), 'm');
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 0);
  }

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      clientId:  new FormControl(''),
      agenceCode:  new FormControl('')
    });

    this.arriereesObserver = this.service.subject.subscribe((arrierees: any[]) => {
      this.arrierees = arrierees;
    });
    this.service.getArrierees(this.filterForm.value);
    this.service.emitSubject();

    this.sharedService.getClients().subscribe((clients: Client[]) => this.clients = clients, error => console.error(error));
    this.sharedService.getAgences().subscribe((agences: Agence[]) => this.agences = agences, error => console.error(error));
  }

  onFilter() {
    let  params = this.filterForm.value;

    params = {
      ...params,
      startDate: `${this.fromDate.year}-${this.fromDate.month}-${this.fromDate.day}`,
      endDate: `${this.toDate.year}-${this.toDate.month}-${this.toDate.day}`
    };

    console.log('fetching with params ', params);

    this.service.getArrierees(params);
  }

  ngOnDestroy(): void {
    this.arriereesObserver.unsubscribe();
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
