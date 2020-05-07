import { Component, OnInit } from '@angular/core';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Agence } from 'src/app/models/agence';
import { Client } from 'src/app/models/client';
import { SharedService } from 'src/app/modules/shared/shared.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  agences?: Agence[];
  clients?: Client[];

  filterForm: FormGroup;

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  constructor(
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter,
    private sharedService: SharedService) {
    this.fromDate = calendar.getPrev(calendar.getToday(), 'm');
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 0);
  }

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      startDate:  new FormControl(this.formatter.format(this.fromDate)),
      endDate:    new FormControl(this.formatter.format(this.toDate)),
      clientId:   new FormControl(''),
      agenceCode: new FormControl('')
    });

    this.sharedService.getClients().subscribe((clients: Client[]) => this.clients = clients, error => console.error(error));
    this.sharedService.getAgences().subscribe((agences: Agence[]) => this.agences = agences, error => console.error(error));
  }

  onFilter() {
    const  params = this.filterForm.value;
    console.log('fetching with params ', params);
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
