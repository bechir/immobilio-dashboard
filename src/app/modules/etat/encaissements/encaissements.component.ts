import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AbstractEtat } from '../abstract-etat';

@Component({
  selector: 'app-encaissements',
  templateUrl: './encaissements.component.html',
  styleUrls: ['./encaissements.component.scss']
})
export class EncaissementsComponent extends AbstractEtat {

  encaissements: any[] | null = null;
  private encaissementsObserver: Subscription;

  ngOnInit(): void {
    this.encaissementsObserver = this.service.encaissementsSubject.subscribe((encaissements: any[]) => {
      this.encaissements = encaissements;
    });

    this.service.emitEncaissementsSubject();
    this.service.getEncaissements(this.initialFilterParams);
  }

  onFilter(params: any[]) {
    this.service.getEncaissements(params);
  }

  ngOnDestroy(): void {
    this.encaissementsObserver.unsubscribe();
  }
}
