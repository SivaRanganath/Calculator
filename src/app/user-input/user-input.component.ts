import { Component, EventEmitter, output, Output } from '@angular/core';
import { item } from '../results-info/results-info.component';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // @Output() emitAnnualdata: EventEmitter<item[]> = new EventEmitter<item[]>();
  emitAnnualdata = output<item[]>();
  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 0;
  duration = 0;

  calculateInvestment() {
      const annualData: item[] = [];
      let investmentValue = this.initialInvestment;

      for (let i = 0; i < this.duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (this.expectedReturn / 100);
        investmentValue += interestEarnedInYear + this.annualInvestment;
        const totalInterest =
          investmentValue - this.annualInvestment * year - this.initialInvestment;
        annualData.push({
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: investmentValue,
          annualInvestment: this.annualInvestment,
          totalInterest: totalInterest,
          totalAmountInvested: this.initialInvestment + this.annualInvestment * year,
        });
      }
      this.emitAnnualdata.emit(annualData);
  }

}
