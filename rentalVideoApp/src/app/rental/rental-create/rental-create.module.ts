import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentalCreatePageRoutingModule } from './rental-create-routing.module';

import { RentalCreatePage } from './rental-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentalCreatePageRoutingModule
  ],
  declarations: [RentalCreatePage]
})
export class RentalCreatePageModule {}
