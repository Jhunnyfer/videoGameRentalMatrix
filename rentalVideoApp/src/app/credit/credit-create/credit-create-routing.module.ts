import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditCreatePage } from './credit-create.page';

const routes: Routes = [
  {
    path: '',
    component: CreditCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditCreatePageRoutingModule {}
