import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmEditPageRoutingModule } from './film-edit-routing.module';

import { FilmEditPage } from './film-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmEditPageRoutingModule
  ],
  declarations: [FilmEditPage]
})
export class FilmEditPageModule {}
