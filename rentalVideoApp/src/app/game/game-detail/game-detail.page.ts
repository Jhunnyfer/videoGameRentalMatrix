import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { Games } from 'src/app/models/games';
import { Consoles } from 'src/app/models/consoles';
import { Genres } from 'src/app/models/genres';
import { Brands } from 'src/app/models/brands';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.page.html',
  styleUrls: ['./game-detail.page.scss'],
})
export class GameDetailPage implements OnInit {

  id: string;
  data: Games;
  genreData: Genres;
  consoleData: Consoles;
  brandData: Brands;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public gameService: GameService
  ) { 
    this.data = new Games();
    this.brandData = new Brands();
    this.consoleData = new Consoles();
    this.genreData = new Genres();
  }

  ngOnInit() {
    // tslint:disable-next-line:quotemark
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.gameService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
      this.brandData = response.brand;
      this.consoleData = response.console;
      this.genreData = response.genre;
    });
  }
 
}
