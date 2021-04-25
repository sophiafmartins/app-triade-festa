import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventoPage } from './evento.page';

const routes: Routes = [
  {
    path: '',
    component: EventoPage
  },  {
    path: 'cadastro-evento',
    loadChildren: () => import('./cadastro-evento/cadastro-evento.module').then( m => m.CadastroEventoPageModule)
  },
  {
    path: 'detalhes-evento',
    loadChildren: () => import('./detalhes-evento/detalhes-evento.module').then( m => m.DetalhesEventoPageModule)
  },
  {
    path: 'edicao-evento',
    loadChildren: () => import('./edicao-evento/edicao-evento.module').then( m => m.EdicaoEventoPageModule)
  },
  {
    path: 'receitas-evento',
    loadChildren: () => import('./receitas-evento/receitas-evento.module').then( m => m.ReceitasEventoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventoPageRoutingModule {}
