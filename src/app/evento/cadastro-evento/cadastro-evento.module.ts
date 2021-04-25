import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEventoPageRoutingModule } from './cadastro-evento-routing.module';

import { CadastroEventoPage } from './cadastro-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroEventoPageRoutingModule
  ],
  declarations: [CadastroEventoPage]
})
export class CadastroEventoPageModule {}
