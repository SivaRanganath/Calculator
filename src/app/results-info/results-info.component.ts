import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-results-info',
  templateUrl: './results-info.component.html',
  styleUrl: './results-info.component.css'
})
export class ResultsInfoComponent implements OnChanges {
  @Input() data: item[] = []

  constructor() {
    console.log(this.data)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data);
  }
}

export interface item {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}
