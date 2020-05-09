import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { BaseFilterForm } from 'src/app/modules/shared/common/base-filter-form';

@Component({
  selector: 'app-analyse-billing-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent extends BaseFilterForm {

  status?: any[];

  ngOnInit(): void {
    let controls = {
      status: new FormControl(''),
    };
    
    this.initComponents(controls);
    this.sharedService.getFacturesStatus().subscribe(
      status => this.status = status,
      error => console.error(error)
    );
  }

  getFilteredParams() {
    let params = this.filterForm.value;

    params = {
      status: params.status ? params.status.map((s: any) => s.id).join(',') : '',
    };
    
    return super.getFilteredParams(params);
  }
}
