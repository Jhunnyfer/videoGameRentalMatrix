import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTabsPage } from './user-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: UserTabsPage,
    children:
      [
        {
          path: 'user',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../../user/user/user.module').then( m => m.UserPageModule)
              }
            ]
        },
        {
          path: 'user-create',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../../user/user-create/user-create.module').then( m => m.UserCreatePageModule)
              }
            ]
        },
        {
          path: '',
          redirectTo: '/user-tabs/user',
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
export class UserTabsPageRoutingModule {}
