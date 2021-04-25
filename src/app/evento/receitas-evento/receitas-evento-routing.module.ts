import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitasEventoPage } from './receitas-evento.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitasEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitasEventoPageRoutingModule {}
