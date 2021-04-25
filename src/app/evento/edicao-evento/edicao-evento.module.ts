import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdicaoEventoPageRoutingModule } from './edicao-evento-routing.module';

import { EdicaoEventoPage } from './edicao-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdicaoEventoPageRoutingModule
  ],
  declarations: [EdicaoEventoPage]
})
export class EdicaoEventoPageModule {}
