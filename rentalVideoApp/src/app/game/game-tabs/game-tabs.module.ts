import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameTabsPageRoutingModule } from './game-tabs-routing.module';

import { GameTabsPage } from './game-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameTabsPageRoutingModule
  ],
  declarations: [GameTabsPage]
})
export class GameTabsPageModule {}
