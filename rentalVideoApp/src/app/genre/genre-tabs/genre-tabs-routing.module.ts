import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenreTabsPage } from './genre-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: GenreTabsPage,
    children:
      [
        {
          path: 'genre',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../../genre/genre/genre.module').then( m => m.GenrePageModule)
              }
            ]
        },
        {
          path: 'genre-create',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../../genre/genre-create/genre-create.module').then( m => m.GenreCreatePageModule)
              }
            ]
        },
        {
          path: '',
          redirectTo: '/genre-tabs/genre',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/film-genre/genre',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenreTabsPageRoutingModule {}
