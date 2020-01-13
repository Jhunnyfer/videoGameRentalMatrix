import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.page.html',
  styleUrls: ['./film.page.scss'],
})
export class FilmPage implements OnInit {

  filmsData: any;

  ngOnInit(): void {
    this.getAllFilms();
  }

  constructor(
    public filmService: FilmService
  ) {
    this.filmsData = [];
  }

  getAllFilms() {
    this.filmService.getFilms().subscribe(response => {
      this.filmsData = response;
    });
  }

}
