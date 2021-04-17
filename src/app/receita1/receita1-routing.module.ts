import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Receita1Page } from './receita1.page';

const routes: Routes = [
  {
    path: '',
    component: Receita1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Receita1PageRoutingModule {}
