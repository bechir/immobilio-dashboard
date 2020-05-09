import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BaseModule } from '../../shared/common/base-module';
import { SharedService } from '../../shared/shared.service';
import { EtatService } from '../etat.service';

@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.scss']
})
export class DepensesComponent extends BaseModule {

  depenses: any[] | null = null;
  private depensesObserver: Subscription;

  constructor(
    protected sharedService: SharedService,
    private service: EtatService) {
    super(sharedService);
  }

  ngOnInit(): void {
    this.depensesObserver = this.service.depensesSubject.subscribe((depenses: any[]) => {
      this.depenses = depenses;
    });
  }

  public onInitFilterForm(params: any) {
    this.service.getDepenses(params);
  }

  onFilter(params: any) {
    this.service.getDepenses(params);
  }

  ngOnDestroy(): void {
    this.depensesObserver.unsubscribe();
  }
}
