import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'intro',
        loadChildren: () => import('../intro/intro.module').then(m => m.IntroPageModule)
      },
      {
        path: 'evento',
        loadChildren: () => import('../evento/evento.module').then(m => m.EventoPageModule)
      },
      {
        path: 'localizacao',
        loadChildren: () => import('../localizacao/localizacao.module').then(m => m.LocalizacaoPageModule)
      },
      {
        path: 'busca',
        loadChildren: () => import('../busca/busca.module').then(m => m.BuscaPageModule)
      },
      {
        path: 'favoritos',
        loadChildren: () => import('../favoritos/favoritos.module').then(m => m.FavoritosPageModule)
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
