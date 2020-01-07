import { Component, OnInit } from '@angular/core';
import { Rentals } from 'src/app/models/rentals';
import { RentalService } from 'src/app/services/rental.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.page.html',
  styleUrls: ['./rental-detail.page.scss'],
})
export class RentalDetailPage implements OnInit {


  id: string;
  data: Rentals;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public rentalService: RentalService
  ) { }

  ngOnInit() {
    // tslint:disable-next-line:quotemark
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.rentalService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    });
  }

}
