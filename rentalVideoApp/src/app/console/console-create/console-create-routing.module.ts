import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsoleCreatePage } from './console-create.page';

const routes: Routes = [
  {
    path: '',
    component: ConsoleCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsoleCreatePageRoutingModule {}
