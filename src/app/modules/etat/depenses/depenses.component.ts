import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AbstractEtat } from '../abstract-etat';

@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.scss']
})
export class DepensesComponent extends AbstractEtat {

  depenses: any[] | null = null;
  private depensesObserver: Subscription;

  ngOnInit(): void {
    super.ngOnInit();

    this.depensesObserver = this.service.depensesSubject.subscribe((depenses: any[]) => {
      this.depenses = depenses;
    });
    this.service.emitDepensesSubject();
    this.service.getDepenses(this.initialFilterParams);
  }

  onFilter(params: any[]) {
    this.service.getDepenses(params);
  }

  ngOnDestroy(): void {
    this.depensesObserver.unsubscribe();
  }
}
