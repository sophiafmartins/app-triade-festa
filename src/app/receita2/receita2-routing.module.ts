import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Receita2Page } from './receita2.page';

const routes: Routes = [
  {
    path: '',
    component: Receita2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Receita2PageRoutingModule {}
