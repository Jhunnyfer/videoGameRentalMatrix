import { Component, OnInit } from '@angular/core';
import { Credits } from 'src/app/models/credits';
import { Rentals } from 'src/app/models/rentals';
import { RentalService } from 'src/app/services/rental.service';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.page.html',
  styleUrls: ['./credit.page.scss'],
})
export class CreditPage implements OnInit {

  creditsData: any;

  constructor(
    public creditService: CreditService
  ) {
    this.creditsData = [];
  }

  ngOnInit() {
    this.getAllCredits();
  }

  
  getAllCredits() {
    this.creditService.getCredits().subscribe(response => {
      console.log(response);
      this.creditsData = response;
    });
  }

}
