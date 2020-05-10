import { Component } from '@angular/core';
import { BaseModule } from '../../shared/common/base-module';
import { Subscription } from 'rxjs';
import { SharedService } from '../../shared/shared.service';
import { AnalyseService } from '../analyse.service';

@Component({
  selector: 'app-clients-contrats',
  templateUrl: './clients-contrats.component.html',
  styleUrls: ['./clients-contrats.component.scss']
})
export class AnalyseClientsContratsComponent extends BaseModule {
  clients: any[] | null = null;
  private clientsObserver: Subscription;

  contrats: any[] | null = null;
  private contratsObserver: Subscription;

  activeTab = 'clients';

  constructor(
    protected sharedService: SharedService,
    private service: AnalyseService) {
    super(sharedService);
  }

  ngOnInit(): void {
    this.clientsObserver = this.service.clientsSubject.subscribe((clients: any[]) => {
      this.clients = clients;
    });
    this.contratsObserver = this.service.contratsSubject.subscribe((contrats: any[]) => {
      this.contrats = contrats;
    });

    this.service.getClients();
    this.service.getContrats();
  }

  public onInitFilterForm(params: any) {
    this.service.getClients(params);
    this.service.getContrats(params);
  }

  onClientsFilter(params: any) {
    this.service.getClients(params);
  }

  onContratsFilter(params: any) {
    this.service.getContrats(params);
  }

  ngOnDestroy(): void {
    this.clientsObserver.unsubscribe();
    this.contratsObserver.unsubscribe();
  }
}
