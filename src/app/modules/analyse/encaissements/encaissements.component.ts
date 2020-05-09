import { Component } from '@angular/core';
import { BaseModule } from '../../shared/common/base-module';
import { SharedService } from '../../shared/shared.service';
import { AnalyseService } from '../analyse.service';
import { Subscription } from 'rxjs';

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
    private service: AnalyseService) {
    super(sharedService);
  }

  ngOnInit(): void {
    this.encaissementsObserver = this.service.encaissementsSubject.subscribe((encaissements: any[]) => {
      this.encaissements = encaissements;
    });
  }

  public onInitFilterForm(params: any) {
    this.service.getEncaissements(params);
  }

  onFilter(params: any) {
    this.service.getEncaissements(params);
  }

  ngOnDestroy(): void {
    this.encaissementsObserver.unsubscribe();
  }
}
