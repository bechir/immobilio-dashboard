import { Component } from '@angular/core';
import { BaseModule } from '../../shared/common/base-module';
import { AnalyseService } from '../analyse.service';
import { SharedService } from '../../shared/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class AnalyseExpensesComponent extends BaseModule {
  expenses: any[] | null = null;
  private expensesObserver: Subscription;

  constructor(
    protected sharedService: SharedService,
    private service: AnalyseService) {
    super(sharedService);
  }

  ngOnInit(): void {
    this.expensesObserver = this.service.expensesSubject.subscribe((expenses: any[]) => {
      this.expenses = expenses;
    });
  }

  public onInitFilterForm(params: any) {
    this.service.getExpenses(params);
  }

  onFilter(params: any) {
    this.service.getExpenses(params);
  }

  ngOnDestroy(): void {
    this.expensesObserver.unsubscribe();
  }
}

