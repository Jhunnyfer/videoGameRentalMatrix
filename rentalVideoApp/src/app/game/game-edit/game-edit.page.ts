import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/models/games';
import { Genres } from 'src/app/models/genres';
import { Consoles } from 'src/app/models/consoles';
import { Brands } from 'src/app/models/brands';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { GenreService } from 'src/app/services/genre.service';
import { BrandService } from 'src/app/services/brand.service';
import { ConsolesService } from 'src/app/services/consoles.service';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.page.html',
  styleUrls: ['./game-edit.page.scss'],
})
export class GameEditPage implements OnInit {

  id: string;
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
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public gameService: GameService,
    public genreService: GenreService,
    public brandService: BrandService,
    public consolesService: ConsolesService,
  ) { 
    this.data = new Games();

  }

  ngOnInit() {
    this.getAllGenres();
    this.getAllBrands();
    this.getAllConsoles();
    // tslint:disable-next-line:quotemark
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.gameService.getItem(this.id).subscribe(response => {       
      this.data = response;
      this.data.genreId = response.genre.id;
      this.data.consoleId = response.console.id;
      this.data.brandId = response.brand.id;
    });
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
    this.gameService.updateItem(this.data).subscribe((response) => {
      this.router.navigate(['/game-detail/' + response.id]);
    });
  }

}
