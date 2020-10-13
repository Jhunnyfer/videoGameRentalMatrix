import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandTabsPage } from './brand-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: BrandTabsPage,
    children:
      [
        {
          path: 'brand',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../../brand/brand/brand.module').then( m => m.BrandPageModule)
              }
            ]
        },
        {
          path: 'brand-create',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../../brand/brand-crate/brand-crate.module').then( m => m.BrandCratePageModule)
              }
            ]
        },
        {
          path: '',
          redirectTo: '/brand-tabs/brand',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/brand-tabs/brand',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandTabsPageRoutingModule {}
