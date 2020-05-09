import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BaseModule } from '../../shared/common/base-module';
import { SharedService } from '../../shared/shared.service';
import { EtatService } from '../etat.service';

@Component({
  selector: 'app-encaissements',
  templateUrl: './encaissements.component.html',
  styleUrls: ['./encaissements.component.scss']
})
export class EncaissementsComponent extends BaseModule {

  encaissements: any[] | null = null;
  private encaissementsObserver: Subscription;

  constructor(
    protected sharedService: SharedService,
    private service: EtatService) {
    super(sharedService);
  }

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
