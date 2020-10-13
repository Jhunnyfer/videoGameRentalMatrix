import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsoleCreatePageRoutingModule } from './console-create-routing.module';

import { ConsoleCreatePage } from './console-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsoleCreatePageRoutingModule
  ],
  declarations: [ConsoleCreatePage]
})
export class ConsoleCreatePageModule {}
