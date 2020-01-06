import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'film',
    loadChildren: () => import('./film/film/film.module').then( m => m.FilmPageModule)
  },
  {
    path: 'film-create',
    loadChildren: () => import('./film/film-create/film-create.module').then( m => m.FilmCreatePageModule)
  },
  {
    path: 'film-create',
    loadChildren: () => import('./film/film-create/film-create.module').then( m => m.FilmCreatePageModule)
  },
  {
    path: 'film-edit',
    loadChildren: () => import('./film/film-edit/film-edit.module').then( m => m.FilmEditPageModule)
  },
  {
    path: 'genre',
    loadChildren: () => import('./genre/genre/genre.module').then( m => m.GenrePageModule)
  },
  {
    path: 'genre-create',
    loadChildren: () => import('./genre/genre-create/genre-create.module').then( m => m.GenreCreatePageModule)
  },
  {
    path: 'genre-edit',
    loadChildren: () => import('./genre/genre-edit/genre-edit.module').then( m => m.GenreEditPageModule)
  },
  {
    path: 'credit',
    loadChildren: () => import('./credit/credit/credit.module').then( m => m.CreditPageModule)
  },
  {
    path: 'credit-create',
    loadChildren: () => import('./credit/credit-create/credit-create.module').then( m => m.CreditCreatePageModule)
  },
  {
    path: 'rental',
    loadChildren: () => import('./rental/rental/rental.module').then( m => m.RentalPageModule)
  },
  {
    path: 'rental-create',
    loadChildren: () => import('./rental/rental-create/rental-create.module').then( m => m.RentalCreatePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
