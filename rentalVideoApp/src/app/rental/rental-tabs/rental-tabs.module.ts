import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentalTabsPageRoutingModule } from './rental-tabs-routing.module';

import { RentalTabsPage } from './rental-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentalTabsPageRoutingModule
  ],
  declarations: [RentalTabsPage]
})
export class RentalTabsPageModule {}
