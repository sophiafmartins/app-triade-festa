import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesEventoPage } from './detalhes-evento.page';

const routes: Routes = [
  {
    path: ':id',
    component: DetalhesEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesEventoPageRoutingModule {}
