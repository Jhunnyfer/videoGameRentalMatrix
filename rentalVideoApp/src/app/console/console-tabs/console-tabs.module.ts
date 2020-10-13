import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsoleTabsPageRoutingModule } from './console-tabs-routing.module';

import { ConsoleTabsPage } from './console-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsoleTabsPageRoutingModule
  ],
  declarations: [ConsoleTabsPage]
})
export class ConsoleTabsPageModule {}
