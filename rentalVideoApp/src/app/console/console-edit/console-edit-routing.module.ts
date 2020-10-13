import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsoleEditPage } from './console-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ConsoleEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsoleEditPageRoutingModule {}
