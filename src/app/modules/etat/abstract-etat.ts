import { OnInit, OnDestroy } from '@angular/core';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Agence } from 'src/app/models/agence';
import { Client } from 'src/app/models/client';
import { EtatService } from './etat.service';
import { SharedService } from '../shared/shared.service';

export abstract class AbstractEtat implements OnInit, OnDestroy {
  agences?: Agence[];
  clients?: Client[];
  
  initialFilterParams: any[];

  ngOnInit() {}

  constructor(
    protected service: EtatService,
    protected sharedService: SharedService) {
  }

  public onInitFilterForm(params: any[]) {
    this.initialFilterParams = params;
  }

  ngOnDestroy(): void {}
}
