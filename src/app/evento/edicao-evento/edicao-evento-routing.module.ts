import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdicaoEventoPage } from './edicao-evento.page';

const routes: Routes = [
  {
    path: ':id',
    component: EdicaoEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdicaoEventoPageRoutingModule {}
