import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEventosPage } from './modal-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEventosPageRoutingModule {}
