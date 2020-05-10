import { Component } from '@angular/core';
import { BaseModule } from '../../shared/common/base-module';
import { SharedService } from '../../shared/shared.service';
import { AnalyseService } from '../analyse.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class AnalyseBillingComponent extends BaseModule {
  factures: any[] | null = null;
  private facturesObserver: Subscription;

  constructor(
    protected sharedService: SharedService,
    private service: AnalyseService) {
    super(sharedService);
  }

  ngOnInit(): void {
    this.facturesObserver = this.service.facturesSubject.subscribe((factures: any[]) => {
      this.factures = factures;
    });
  }

  public onInitFilterForm(params: any) {
    this.service.getFactures(params);
  }

  onFilter(params: any) {
    this.service.getFactures(params);
  }

  ngOnDestroy(): void {
    this.facturesObserver.unsubscribe();
  }
}
