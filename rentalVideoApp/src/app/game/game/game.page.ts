import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  gamesData: any;
  searchTerm: string = "";


  ngOnInit(): void {
    this.getAllFilms();
  }

  constructor(
    public filmService: GameService
  ) {
    this.gamesData = [];
  }

  getAllFilms() {
    this.filmService.getGames().subscribe(response => {
      this.gamesData = response;
    });
  }

}
