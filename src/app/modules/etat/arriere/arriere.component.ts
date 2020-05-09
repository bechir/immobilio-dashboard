import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BaseModule } from '../../shared/common/base-module';
import { EtatService } from '../etat.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-arriere',
  templateUrl: './arriere.component.html',
  styleUrls: ['./arriere.component.scss']
})
export class ArriereComponent extends BaseModule {

  arrierees: any[] | null = null;
  private arriereesObserver: Subscription;

  constructor(
    protected sharedService: SharedService,
    private service: EtatService) {
    super(sharedService);
  }

  ngOnInit(): void {
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
