import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmCreatePage } from './film-create.page';

const routes: Routes = [
  {
    path: '',
    component: FilmCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmCreatePageRoutingModule {}
