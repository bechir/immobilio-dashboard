import { Component } from '@angular/core';

import { BaseFilterForm } from 'src/app/modules/shared/common/base-filter-form';

@Component({
  selector: 'app-analyse-encaissements-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent extends BaseFilterForm {
}
