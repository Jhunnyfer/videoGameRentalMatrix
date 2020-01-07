import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.page.html',
  styleUrls: ['./genre.page.scss'],
})
export class GenrePage implements OnInit {

  genresData: any;

  ngOnInit() {
    this.getAllGenres();
  }

  constructor(
    public genreService: GenreService
  ) {
    this.genresData = [];
  }

  getAllGenres() {
    this.genreService.getGenres().subscribe(response => {
      console.log(response);
      this.genresData = response;
    });
  }

}
