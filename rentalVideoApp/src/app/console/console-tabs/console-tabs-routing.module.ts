import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsoleTabsPage } from './console-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: ConsoleTabsPage,
    children:
      [
        {
          path: 'console',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../../console/console/console.module').then( m => m.ConsolePageModule)
              }
            ]
        },
        {
          path: 'console-create',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../../console/console-create/console-create.module').then( m => m.ConsoleCreatePageModule)
              }
            ]
        },
        {
          path: '',
          redirectTo: '/console-tabs/console',
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
export class ConsoleTabsPageRoutingModule {}
