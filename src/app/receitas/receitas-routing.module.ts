import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitasPage } from './receitas.page';

const routes: Routes = [
  {
    path: ':id',
    component: ReceitasPage
  },  {
    path: 'modal-eventos',
    loadChildren: () => import('./modal-eventos/modal-eventos.module').then( m => m.ModalEventosPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitasPageRoutingModule {}
