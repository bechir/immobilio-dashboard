import { OnInit, OnDestroy } from '@angular/core';
import { Agence } from 'src/app/models/agence';
import { Client } from 'src/app/models/client';
import { SharedService } from '../shared.service';

export abstract class BaseModule implements OnInit, OnDestroy {
  agences?: Agence[];
  clients?: Client[];

  ngOnInit() {}

  constructor(
    protected sharedService: SharedService) {
  }

  ngOnDestroy(): void {}
}
