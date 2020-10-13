import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameTabsPage } from './game-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: GameTabsPage,
    children:
      [
        {
          path: 'game',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../../game/game/game.module').then( m => m.GamePageModule)
              }
            ]
        },
        {
          path: 'game-create',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../../game/game-create/game-create.module').then( m => m.GameCreatePageModule)
              }
            ]
        },
        {
          path: '',
          redirectTo: '/game-tabs/game',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/game-tabs/game',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameTabsPageRoutingModule {}
