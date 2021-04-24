import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscaPageRoutingModule } from './busca-routing.module';

import { BuscaPage } from './busca.page';

import { ModalFiltroComponent } from '../modal-filtro/modal-filtro.component';
import { CardReceitasComponent } from 'src/app/card-receitas/card-receitas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscaPageRoutingModule
  ],
  declarations: [BuscaPage, ModalFiltroComponent, CardReceitasComponent],
  entryComponents: [ModalFiltroComponent]
})
export class BuscaPageModule {}
