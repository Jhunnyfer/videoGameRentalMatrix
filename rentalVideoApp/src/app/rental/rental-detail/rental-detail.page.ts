import { Component, OnInit } from '@angular/core';
import { Rentals } from 'src/app/models/rentals';
import { RentalService } from 'src/app/services/rental.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Films } from 'src/app/models/films';
import { Genres } from 'src/app/models/genres';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.page.html',
  styleUrls: ['./rental-detail.page.scss'],
})
export class RentalDetailPage implements OnInit {


  id: string;
  data: Rentals;
  dataFilm: Films;
  dataGenre: Genres;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public rentalService: RentalService
  ) {
    this.data = new Rentals();
    this.dataFilm = new Films();
    this.dataGenre = new Genres();
  }

  ngOnInit() {
    // tslint:disable-next-line:quotemark
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.rentalService.getItem(this.id).subscribe(response => {
      this.data = response;
      this.dataFilm = response.film;
      this.dataGenre = response.film.genre;
    });
  }

}
