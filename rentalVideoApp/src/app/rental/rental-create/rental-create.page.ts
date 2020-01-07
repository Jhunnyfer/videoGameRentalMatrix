import { Component, OnInit } from '@angular/core';
import { Rentals } from 'src/app/models/rentals';
import { RentalService } from 'src/app/services/rental.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rental-create',
  templateUrl: './rental-create.page.html',
  styleUrls: ['./rental-create.page.scss'],
})
export class RentalCreatePage implements OnInit {

  data: Rentals;

  constructor(
    public rentalService: RentalService,
    public router: Router
  ) {
    this.data = new Rentals();
   }

  ngOnInit() {
  }

  submitForm() {
    this.rentalService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['genre-tabs']);
    });
  }

}
