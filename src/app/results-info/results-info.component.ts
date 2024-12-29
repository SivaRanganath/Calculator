import { Component, Input, OnChanges, SimpleChanges, input } from '@angular/core';

@Component({
  selector: 'app-results-info',
  templateUrl: './results-info.component.html',
  styleUrl: './results-info.component.css'
})
export class ResultsInfoComponent implements OnChanges {
  data = input<item[] | undefined>([]);


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
