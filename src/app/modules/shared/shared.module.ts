import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading/heading.component';
import { RouterModule } from '@angular/router';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { BasicHBarChartComponent } from './basic-h-bar-chart/basic-h-bar-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { AgenceListingComponent } from './agence-listing/agence-listing.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { DateFormatFRPipe, DateFormatENPipe } from 'src/app/pipes/date.pipe';
import { EtatFilterFormComponent } from '../etat/components/filter-form/etat-filter-form.component';
import { NgbDatepickerModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckablePipe } from 'src/app/pipes/util.pipe';


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
    NgbTooltipModule
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
