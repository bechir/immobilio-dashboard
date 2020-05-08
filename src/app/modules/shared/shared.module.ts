import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HeadingComponent } from './heading/heading.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { CheckablePipe } from 'src/app/pipes/util.pipe';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { DateFormatFRPipe, DateFormatENPipe } from 'src/app/pipes/date.pipe';
import { BasicHBarChartComponent } from './basic-h-bar-chart/basic-h-bar-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { AgenceListingComponent } from './agence-listing/agence-listing.component';
import { EtatFilterFormComponent } from '../etat/components/filter-form/etat-filter-form.component';



@NgModule({
  declarations: [
    HeadingComponent,
    PieChartComponent,
    BasicHBarChartComponent,
    BarChartComponent,
    AgenceListingComponent,
    FilterPipe,
    CheckablePipe,
    DateFormatFRPipe,
    DateFormatENPipe,
    EtatFilterFormComponent,
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
    FilterPipe,
    CheckablePipe,
    DateFormatFRPipe,
    DateFormatENPipe,
    EtatFilterFormComponent
  ]
})
export class SharedModule { }
