import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HeadingComponent } from './components/heading/heading.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { CheckablePipe, AmountPipe } from 'src/app/pipes/util.pipe';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { DateFormatFRPipe, DateFormatENPipe } from 'src/app/pipes/date.pipe';
import { BasicHBarChartComponent } from './components/basic-h-bar-chart/basic-h-bar-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { AgenceListingComponent } from './components/agence-listing/agence-listing.component';
import { EtatFilterFormComponent } from '../etats/components/filter-form/etat-filter-form.component';
import { TableToolbarComponent } from './components/table-toolbar/table-toolbar.component';
import { TableSelectionInfoComponent } from './components/table-selection-info/table-selection-info.component';

@NgModule({
  declarations: [
    HeadingComponent,
    PieChartComponent,
    BasicHBarChartComponent,
    BarChartComponent,
    AgenceListingComponent,
    FilterPipe,
    AmountPipe,
    CheckablePipe,
    DateFormatFRPipe,
    DateFormatENPipe,
    EtatFilterFormComponent,
    TableToolbarComponent,
    TableSelectionInfoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgbTooltipModule,
    NgMultiSelectDropDownModule
  ],
  exports: [
    HeadingComponent,
    PieChartComponent,
    BasicHBarChartComponent,
    BarChartComponent,
    AgenceListingComponent,
    AmountPipe,
    FilterPipe,
    CheckablePipe,
    DateFormatFRPipe,
    DateFormatENPipe,
    EtatFilterFormComponent,
    TableToolbarComponent,
    TableSelectionInfoComponent
  ],
  providers: [DateFormatENPipe, DateFormatFRPipe]
})
export class SharedModule { }
