import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenreTabsPageRoutingModule } from './genre-tabs-routing.module';

import { GenreTabsPage } from './genre-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenreTabsPageRoutingModule
  ],
  declarations: [GenreTabsPage]
})
export class GenreTabsPageModule {}
