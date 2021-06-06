import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformesPage } from './informes.page';

const routes: Routes = [
  {
    path: ':id',
    component: InformesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformesPageRoutingModule {}
