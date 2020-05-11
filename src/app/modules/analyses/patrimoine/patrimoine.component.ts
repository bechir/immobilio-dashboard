import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../../shared/shared.service';
import { AnalyseService } from '../analyse.service';
import { BaseModule } from '../../shared/common/base-module';

@Component({
  selector: 'app-patrimoine',
  templateUrl: './patrimoine.component.html',
  styleUrls: ['./patrimoine.component.scss']
})
export class AnalysePatrimoineComponent extends BaseModule {
  biensImmobiliers: any[] | null = null;
  private biensImmobiliersObserver: Subscription;

  espacesLocatifs: any[] | null = null;
  private espacesLocatifsObserver: Subscription;

  proprietaires: any[] | null = null;
  private proprietairesObserver: Subscription;

  activeTab = 'biens';

  constructor(
    protected sharedService: SharedService,
    private service: AnalyseService) {
    super(sharedService);
  }

  ngOnInit(): void {
    this.biensImmobiliersObserver = this.service.biensImmobiliersSubject.subscribe((biensImmobiliers: any[]) => {
      this.biensImmobiliers = biensImmobiliers;
    });

    this.espacesLocatifsObserver = this.service.espacesLocatifsSubject.subscribe((espacesLocatifs: any[]) => {
      this.espacesLocatifs = espacesLocatifs;
    });

    this.proprietairesObserver = this.service.proprietairesSubject.subscribe((proprietaires: any[]) => {
      this.proprietaires = proprietaires;
    });
  }

  public onInitFilterForm(params: any) {
    this.service.getBiensImmobiliers(params);
    this.service.getEspacesLocatifs(params);
    this.service.getProprietaires(params);
  }

  onBiensFilter(params: any) {
    this.service.getBiensImmobiliers(params);
  }

  onEspacesFilter(params: any) {
    this.service.getEspacesLocatifs(params);
  }

  onProprietairesFilter(params: any) {
    this.service.getProprietaires(params);
  }

  ngOnDestroy(): void {
    this.biensImmobiliersObserver.unsubscribe();
    this.espacesLocatifsObserver.unsubscribe();
    this.proprietairesObserver.unsubscribe();
  }
}
