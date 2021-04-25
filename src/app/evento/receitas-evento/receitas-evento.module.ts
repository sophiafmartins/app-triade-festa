import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceitasEventoPageRoutingModule } from './receitas-evento-routing.module';

import { ReceitasEventoPage } from './receitas-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitasEventoPageRoutingModule
  ],
  declarations: [ReceitasEventoPage]
})
export class ReceitasEventoPageModule {}
