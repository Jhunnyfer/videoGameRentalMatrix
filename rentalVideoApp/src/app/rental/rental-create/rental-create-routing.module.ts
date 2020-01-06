import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentalCreatePage } from './rental-create.page';

const routes: Routes = [
  {
    path: '',
    component: RentalCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentalCreatePageRoutingModule {}
