import { Component } from '@angular/core';

import { BaseFilterForm, I18n, DatepickerI18nFrench } from 'src/app/modules/shared/common/base-filter-form';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-analyse-encaissements-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: DatepickerI18nFrench}]
})
export class AnalyseEncaissementFilterFormComponent extends BaseFilterForm {
}
