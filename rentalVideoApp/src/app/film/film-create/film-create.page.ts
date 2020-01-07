import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Router } from '@angular/router';
import { Films } from 'src/app/models/films';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-film-create',
  templateUrl: './film-create.page.html',
  styleUrls: ['./film-create.page.scss'],
})
export class FilmCreatePage implements OnInit {

  data: Films;
  genresData: any;

  constructor(
    public filmService: FilmService,
    public genreService: GenreService,
    public router: Router
  ) {
    this.data = new Films();
    this.genresData = [];
   }

  ngOnInit() {
    this.getAllGenres();
  }

  getAllGenres() {
    this.genreService.getGenres().subscribe(response => {
      this.genresData = response;
    });
  }

  submitForm() {
    this.filmService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['film-tabs']);
    });
  }

}
