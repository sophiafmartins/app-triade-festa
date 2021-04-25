import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesEventoPageRoutingModule } from './detalhes-evento-routing.module';

import { DetalhesEventoPage } from './detalhes-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesEventoPageRoutingModule
  ],
  declarations: [DetalhesEventoPage]
})
export class DetalhesEventoPageModule {}
