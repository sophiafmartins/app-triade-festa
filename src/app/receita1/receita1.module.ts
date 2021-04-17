import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Receita1PageRoutingModule } from './receita1-routing.module';

import { Receita1Page } from './receita1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Receita1PageRoutingModule
  ],
  declarations: [Receita1Page]
})
export class Receita1PageModule {}
