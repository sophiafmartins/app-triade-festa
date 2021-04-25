import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'busca',
    loadChildren: () => import('./busca/busca.module').then( m => m.BuscaPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'receitas',
    loadChildren: () => import('./receitas/receitas.module').then( m => m.ReceitasPageModule)
  },
  {
    path: 'cadastro-evento',
    loadChildren: () => import('./evento/cadastro-evento/cadastro-evento.module').then( m => m.CadastroEventoPageModule)
  },
  {
    path: 'edicao-evento',
    loadChildren: () => import('./evento/edicao-evento/edicao-evento.module').then( m => m.EdicaoEventoPageModule)
  },
  {
    path: 'detalhes-evento',
    loadChildren: () => import('./evento/detalhes-evento/detalhes-evento.module').then( m => m.DetalhesEventoPageModule)
  },
  {
    path: 'receitas-evento',
    loadChildren: () => import('./evento/receitas-evento/receitas-evento.module').then( m => m.ReceitasEventoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'localizacao',
    loadChildren: () => import('./localizacao/localizacao.module').then( m => m.LocalizacaoPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
