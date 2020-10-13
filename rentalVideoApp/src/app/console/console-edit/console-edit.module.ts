import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsoleEditPageRoutingModule } from './console-edit-routing.module';

import { ConsoleEditPage } from './console-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsoleEditPageRoutingModule
  ],
  declarations: [ConsoleEditPage]
})
export class ConsoleEditPageModule {}
