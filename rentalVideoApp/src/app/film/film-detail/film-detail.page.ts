import { Component, OnInit } from '@angular/core';
import { Films } from 'src/app/models/films';
import { FilmService } from 'src/app/services/film.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.page.html',
  styleUrls: ['./film-detail.page.scss'],
})
export class FilmDetailPage implements OnInit {

  id: string;
  data: Films;
  constructor(
    public activatedRoute: ActivatedRoute,
    public filmService: FilmService,
    public router: Router
  ) {
    this .data = new Films();
   }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.filmService.getItem(this.id).subscribe(response => {
      this.data = response;
    });
  }

}
