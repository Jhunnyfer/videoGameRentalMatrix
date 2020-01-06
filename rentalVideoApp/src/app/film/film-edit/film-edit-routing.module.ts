import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmEditPage } from './film-edit.page';

const routes: Routes = [
  {
    path: '',
    component: FilmEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmEditPageRoutingModule {}
