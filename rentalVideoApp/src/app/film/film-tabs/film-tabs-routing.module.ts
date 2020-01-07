import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmTabsPage } from './film-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: FilmTabsPage,
    children:
      [
        {
          path: 'film',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../../film/film/film.module').then( m => m.FilmPageModule)
              }
            ]
        },
        {
          path: 'film-create',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../../film/film-create/film-create.module').then( m => m.FilmCreatePageModule)
              }
            ]
        },
        {
          path: '',
          redirectTo: '/film-tabs/film',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/film-tabs/film',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmTabsPageRoutingModule {}
