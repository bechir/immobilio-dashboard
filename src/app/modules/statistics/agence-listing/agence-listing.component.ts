import { Component, OnInit } from '@angular/core';
import { StatisticsRepository } from '../statistics-repository.service';
import { Agence } from 'src/app/models/agence';

@Component({
  selector: 'app-agence-stat-listing',
  templateUrl: './agence-listing.component.html',
  styleUrls: ['./agence-listing.component.scss']
})
export class AgenceListingComponent implements OnInit {

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
