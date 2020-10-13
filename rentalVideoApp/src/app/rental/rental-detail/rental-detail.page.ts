import { Component, OnInit } from '@angular/core';
import { Rentals } from 'src/app/models/rentals';
import { RentalService } from 'src/app/services/rental.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Games } from 'src/app/models/games';
import { Genres } from 'src/app/models/genres';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.page.html',
  styleUrls: ['./rental-detail.page.scss'],
})
export class RentalDetailPage implements OnInit {


  id: string;
  data: Rentals;
  dataGame: Games;
  dataGenre: Genres;
  dataUser: Users;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public rentalService: RentalService
  ) {
    this.data = new Rentals();
    this.dataGame = new Games();
    this.dataGenre = new Genres();
    this.dataUser = new Users();
  }

  ngOnInit() {
    // tslint:disable-next-line:quotemark
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.rentalService.getItem(this.id).subscribe(response => {
      console.log(response);
      
      this.data = response;
      this.dataGame = response.game;
      this.dataUser = response.user;
      this.dataGenre = response.game.genre;
    });
  }

}
