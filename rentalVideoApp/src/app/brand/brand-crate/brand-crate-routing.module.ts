import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandCratePage } from './brand-crate.page';

const routes: Routes = [
  {
    path: '',
    component: BrandCratePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandCratePageRoutingModule {}
