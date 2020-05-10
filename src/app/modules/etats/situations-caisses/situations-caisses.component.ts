import { Component } from '@angular/core';
import { BaseModule } from '../../shared/common/base-module';
import { SharedService } from '../../shared/shared.service';
import { Subscription } from 'rxjs';
import { EtatService } from '../etat.service';

@Component({
  selector: 'app-situations-caisses',
  templateUrl: './situations-caisses.component.html',
  styleUrls: ['./situations-caisses.component.scss']
})
export class EtatSituationsCaissesComponent extends BaseModule {
  situationsCaisses: any[] | null = null;
  private situationsCaissesObserver: Subscription;

  constructor(
    protected sharedService: SharedService,
    private service: EtatService) {
    super(sharedService);
  }

  ngOnInit(): void {
    this.situationsCaissesObserver = this.service.situationsCaissesSubject.subscribe((situationsCaisses: any[]) => {
      this.situationsCaisses = situationsCaisses;
    });
  }

  public onInitFilterForm(params: any) {
    this.service.getSituationsCaisses(params);
  }

  onFilter(params: any) {
    this.service.getSituationsCaisses(params);
  }

  ngOnDestroy(): void {
    this.situationsCaissesObserver.unsubscribe();
  }
}
