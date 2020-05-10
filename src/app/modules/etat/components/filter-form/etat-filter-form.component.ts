import { Component } from '@angular/core';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { Agence } from 'src/app/models/agence';
import { BaseFilterForm, I18n, DatepickerI18nFrench } from 'src/app/modules/shared/common/base-filter-form';

@Component({
  selector: 'app-etat-filter-form',
  templateUrl: './etat-filter-form.component.html',
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: DatepickerI18nFrench}]
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
}
