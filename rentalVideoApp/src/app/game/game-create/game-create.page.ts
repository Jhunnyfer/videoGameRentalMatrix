import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/models/games';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

import { BrandService } from 'src/app/services/brand.service';
import { GenreService } from 'src/app/services/genre.service';
import { ConsolesService } from 'src/app/services/consoles.service';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.page.html',
  styleUrls: ['./game-create.page.scss'],
})
export class GameCreatePage implements OnInit {

  data: Games;
  genresData: any;
  consolesData: any;
  brandsData: any;

  statuses = [
    {
      id: 1,
      status: 'Activo',
    },
    {
      id: 2,
      status: 'Inactivo',
    }
  ];

  constructor(
    public genreService: GenreService,
    public brandService: BrandService,
    public gameService: GameService,
    public consolesService: ConsolesService,
    public router: Router
    ) {
    this.data = new Games(); 
   }

  ngOnInit() {
    this.getAllGenres();
    this.getAllBrands();
    this.getAllConsoles();
  }


  getAllGenres() {
    this.genreService.getGenres().subscribe(response => {
      this.genresData = response;
    });
  }

  getAllBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brandsData = response;
    });
  }

  getAllConsoles() {
    this.consolesService.getConsoles().subscribe(response => {
      this.consolesData = response;
    });
  }

  submitForm() {
    this.gameService.createItem(this.data).subscribe((response) => {
      console.log(response);
      //this.router.navigate(['/rental-detail/' + response.id]);
    });
  }

}
