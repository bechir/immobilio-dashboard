import { Component, OnInit, Input } from '@angular/core';
import { Agence } from 'src/app/models/agence';
import { StatisticsRepository } from '../../../dashboard/statistics/statistics-repository.service';

@Component({
  selector: 'app-agence-listing',
  templateUrl: './agence-listing.component.html',
  styleUrls: ['./agence-listing.component.scss']
})
export class AgenceListingComponent implements OnInit {
  @Input() title?: string = 'Séléctionnez une agence';
  @Input() targetPathPrefix: string;

  constructor(private repository: StatisticsRepository) { }

  public errorMessage?: string;
  public agences?: Agence[];

  ngOnInit(): void {
    this.repository.getAgences()
      .subscribe(
        (agences: Agence[]) => { this.agences = agences; },
        resp => this.errorMessage = resp.error.errorMessage
    );
  }

}
