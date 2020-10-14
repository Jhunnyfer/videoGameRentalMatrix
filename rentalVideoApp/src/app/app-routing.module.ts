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
  },
 
  {
    path: 'genre-tabs',
    loadChildren: () => import('./genre/genre-tabs/genre-tabs.module').then( m => m.GenreTabsPageModule)
  },
  {
    path: 'rental-tabs',
    loadChildren: () => import('./rental/rental-tabs/rental-tabs.module').then( m => m.RentalTabsPageModule)
  },
  {
    path: 'rental-detail/:id',
    loadChildren: () => import('./rental/rental-detail/rental-detail.module').then( m => m.RentalDetailPageModule)
  },
 
  {
    path: 'game',
    loadChildren: () => import('./game/game/game.module').then( m => m.GamePageModule)
  },
  {
    path: 'game-create',
    loadChildren: () => import('./game/game-create/game-create.module').then( m => m.GameCreatePageModule)
  },
  {
    path: 'game-edit/:id',
    loadChildren: () => import('./game/game-edit/game-edit.module').then( m => m.GameEditPageModule)
  },
  {
    path: 'game-tabs',
    loadChildren: () => import('./game/game-tabs/game-tabs.module').then( m => m.GameTabsPageModule)
  },
  {
    path: 'game-detail/:id',
    loadChildren: () => import('./game/game-detail/game-detail.module').then( m => m.GameDetailPageModule)
  },
  {
    path: 'brand',
    loadChildren: () => import('./brand/brand/brand.module').then( m => m.BrandPageModule)
  },
  {
    path: 'brand-crate',
    loadChildren: () => import('./brand/brand-crate/brand-crate.module').then( m => m.BrandCratePageModule)
  },
  {
    path: 'brand-tabs',
    loadChildren: () => import('./brand/brand-tabs/brand-tabs.module').then( m => m.BrandTabsPageModule)
  },
  {
    path: 'user-tabs',
    loadChildren: () => import('./user/user-tabs/user-tabs.module').then( m => m.UserTabsPageModule)
  },
  {
    path: 'user-create',
    loadChildren: () => import('./user/user-create/user-create.module').then( m => m.UserCreatePageModule)
  },
  {
    path: 'user-update/:id',
    loadChildren: () => import('./user/user-update/user-update.module').then( m => m.UserUpdatePageModule)
  },
  {
    path: 'user-detail/:id',
    loadChildren: () => import('./user/user-detail/user-detail.module').then( m => m.UserDetailPageModule)
  },
  {
    path: 'console-tabs',
    loadChildren: () => import('./console/console-tabs/console-tabs.module').then( m => m.ConsoleTabsPageModule)
  },
  {
    path: 'console-create',
    loadChildren: () => import('./console/console-create/console-create.module').then( m => m.ConsoleCreatePageModule)
  },
  {
    path: 'console-edit/:id',
    loadChildren: () => import('./console/console-edit/console-edit.module').then( m => m.ConsoleEditPageModule)
  },
  {
    path: 'console',
    loadChildren: () => import('./console/console/console.module').then( m => m.ConsolePageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports/reports.module').then( m => m.ReportsPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
