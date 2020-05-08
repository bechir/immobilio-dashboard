import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AbstractEtat } from '../abstract-etat';

@Component({
  selector: 'app-arriere',
  templateUrl: './arriere.component.html',
  styleUrls: ['./arriere.component.scss']
})
export class ArriereComponent extends AbstractEtat {

  arrierees: any[] | null = null;
  private arriereesObserver: Subscription;

  ngOnInit(): void {
    super.ngOnInit();

    this.arriereesObserver = this.service.arrieresSubject.subscribe((arrierees: any[]) => {
      this.arrierees = arrierees;
    });

    this.service.emitArrieresSubject();
    this.service.getArrierees(this.initialFilterParams);
  }

  onFilter(params: any[]) {
    this.service.getArrierees(params);
  }

  ngOnDestroy(): void {
    this.arriereesObserver.unsubscribe();
  }
}
