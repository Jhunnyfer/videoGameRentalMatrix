import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmPageRoutingModule } from './film-routing.module';

import { FilmPage } from './film.page';

import { FilmService } from '../../services/film.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmPageRoutingModule
  ],
  declarations: [FilmPage]
})
export class FilmPageModule {

  films: any[] = [];

  constructor(
    public filmService: FilmService
  ) {}
}
