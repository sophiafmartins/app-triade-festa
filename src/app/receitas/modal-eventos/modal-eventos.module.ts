import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEventosPageRoutingModule } from './modal-eventos-routing.module';

import { ModalEventosPage } from './modal-eventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEventosPageRoutingModule
  ],
  declarations: [ModalEventosPage]
})
export class ModalEventosPageModule {}
