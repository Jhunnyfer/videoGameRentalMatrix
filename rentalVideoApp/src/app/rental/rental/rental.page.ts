import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';
import * as moment from 'moment';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.page.html',
  styleUrls: ['./rental.page.scss'],
})
export class RentalPage implements OnInit {

  rentalsData: any;

  constructor(
    public rentalService: RentalService
  ) {
    this.rentalsData = [];
  }

  ngOnInit() {
    this.getAllRentals();
  }

  // Get all Rental
  getAllRentals() {
    this.rentalService.getRentals().subscribe(response => {
      this.rentalsData = response;
    });
  }

}
