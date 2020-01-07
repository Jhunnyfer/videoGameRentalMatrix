import { Component, OnInit } from '@angular/core';
import { Genres } from 'src/app/models/genres';
import { GenreService } from 'src/app/services/genre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre-create',
  templateUrl: './genre-create.page.html',
  styleUrls: ['./genre-create.page.scss'],
})
export class GenreCreatePage implements OnInit {

  data: Genres;

  constructor(
    public genreService: GenreService,
    public router: Router
  ) {
    this.data = new Genres();
   }

  ngOnInit() {
  }

  submitForm() {
    this.genreService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['genre-tabs']);
    });
  }
}
