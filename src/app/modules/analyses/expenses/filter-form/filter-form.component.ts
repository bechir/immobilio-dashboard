import { Component } from '@angular/core';

import { BaseFilterForm } from 'src/app/modules/shared/common/base-filter-form';

@Component({
  selector: 'app-analyse-expenses-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class AnalyseExpensesFilterFormComponent extends BaseFilterForm {
}
