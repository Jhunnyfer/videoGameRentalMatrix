import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrandCratePageRoutingModule } from './brand-crate-routing.module';

import { BrandCratePage } from './brand-crate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrandCratePageRoutingModule
  ],
  declarations: [BrandCratePage]
})
export class BrandCratePageModule {}
