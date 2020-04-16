import { Component, OnInit } from '@angular/core';
import { Agence } from 'src/app/models/agence';
import { ActivatedRoute } from '@angular/router';
import { StatisticsRepository } from '../statistics-repository.service';

@Component({
  selector: 'app-agence-report',
  templateUrl: './agence-report.component.html',
  styleUrls: ['./agence-report.component.scss']
})
export class AgenceReportComponent implements OnInit {
  title: string = 'Statistiques ';
  agence?: Agence;
  errorMessage?: string;

  constructor(private route: ActivatedRoute, private repository: StatisticsRepository) { }

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    this.repository.getAgence(id)
      .subscribe((agence: Agence) => {
        this.agence = agence;
        this.title += agence.name;
      },

      errResp => this.errorMessage = errResp.error.errorMessage
    )
  }

}
