import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentalTabsPage } from './rental-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: RentalTabsPage,
    children:
      [
        {
          path: 'rental-create',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../../rental/rental-create/rental-create.module').then( m => m.RentalCreatePageModule)
              }
            ]
        },
        {
          path: 'rental',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../../rental/rental/rental.module').then( m => m.RentalPageModule)
              }
            ]
        },
        {
          path: '',
          redirectTo: '/rental-tabs/rental-create',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/rental-tabs/rental-create',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentalTabsPageRoutingModule {}
