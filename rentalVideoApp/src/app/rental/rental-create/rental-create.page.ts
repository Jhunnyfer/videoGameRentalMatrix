import { Component, OnInit } from '@angular/core';
import { Rentals } from 'src/app/models/rentals';
import { RentalService } from 'src/app/services/rental.service';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rental-create',
  templateUrl: './rental-create.page.html',
  styleUrls: ['./rental-create.page.scss'],
})
export class RentalCreatePage implements OnInit {

  data: Rentals;
  gamesData: any;
  usersData: any;

  constructor(
    public rentalService: RentalService,
    public gameService: GameService,
    public userService: UserService,
    public router: Router
  ) {
    this.data = new Rentals();
    this.gamesData = [];
    this.usersData = [];
   }

  ngOnInit() {
    this.getAllGames();
    this.getAllUsers();
  }

  getAllGames() {
    this.gameService.getGames().subscribe(response => {
      this.gamesData = response;
      
    });
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(response => {
      this.usersData = response;
    });
  }

  submitForm() {
    this.data.rentalDate = new Date();
    this.rentalService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['/rental-detail/' + response.id]);
    });
  }

}
