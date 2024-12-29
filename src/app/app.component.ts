import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  annualData = []

  getAnnualData(data: any) {
     this.annualData = data
  }
}
