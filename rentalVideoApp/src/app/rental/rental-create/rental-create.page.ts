import { Component, OnInit } from '@angular/core';
import { Rentals } from 'src/app/models/rentals';
import { RentalService } from 'src/app/services/rental.service';
import { Router } from '@angular/router';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-rental-create',
  templateUrl: './rental-create.page.html',
  styleUrls: ['./rental-create.page.scss'],
})
export class RentalCreatePage implements OnInit {

  data: Rentals;
  filmsData: any;

  constructor(
    public rentalService: RentalService,
    public filmService: FilmService,
    public router: Router
  ) {
    this.data = new Rentals();
    this.filmsData = [];
   }

  ngOnInit() {
    this.getAllFilms();
  }

  getAllFilms() {
    this.filmService.getFilms().subscribe(response => {
      console.log(response);
      this.filmsData = response;
    });
  }

  submitForm() {
    this.data.rentalDate = new Date();
    this.rentalService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['rental-tabs/rental']);
    });
  }

}
