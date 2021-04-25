import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroEventoPage } from './cadastro-evento.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroEventoPageRoutingModule {}
