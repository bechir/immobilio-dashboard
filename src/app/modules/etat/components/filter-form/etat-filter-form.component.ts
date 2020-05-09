import { Component } from '@angular/core';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { Agence } from 'src/app/models/agence';
import { BaseFilterForm } from 'src/app/modules/shared/common/base-filter-form';

@Component({
  selector: 'app-etat-filter-form',
  templateUrl: './etat-filter-form.component.html'
})
export class EtatFilterFormComponent extends BaseFilterForm {
  
  agences?: Agence[];
  scis?: any[];

  selectedAgences = [];

  ngOnInit(): void {
    const controls = {
      scis: new FormControl(''),
      agences: new FormControl('')
    };

    super.initComponents(controls);

    this.sharedService.getAgences().subscribe((agences: Agence[]) => this.agences = agences, error => console.error(error));
    this.sharedService.getScis().subscribe((scis: any[]) => this.scis = scis, error => console.error(error));
  }

  getFilteredParams() {
    const {agences, scis} = this.filterForm.value;

    const params = {
      agences: agences ? agences.map((a: Agence) => a.id).join(',') : '',
      scis: scis ? scis.map((s: any) => s.id).join(',') : ''
    };

    return super.getFilteredParams(params);
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
