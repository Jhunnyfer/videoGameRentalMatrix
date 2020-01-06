import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmCreatePageRoutingModule } from './film-create-routing.module';

import { FilmCreatePage } from './film-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmCreatePageRoutingModule
  ],
  declarations: [FilmCreatePage]
})
export class FilmCreatePageModule {}
