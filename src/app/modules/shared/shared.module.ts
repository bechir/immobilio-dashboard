import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from "@angular/material/checkbox";

import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    TableSelectionInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgbModule,
    NgbTooltipModule,
    NgMultiSelectDropDownModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule
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
