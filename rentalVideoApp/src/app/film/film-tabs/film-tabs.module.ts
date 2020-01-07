import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmTabsPageRoutingModule } from './film-tabs-routing.module';

import { FilmTabsPage } from './film-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmTabsPageRoutingModule
  ],
  declarations: [FilmTabsPage]
})
export class FilmTabsPageModule {}
