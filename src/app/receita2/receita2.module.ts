import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Receita2PageRoutingModule } from './receita2-routing.module';

import { Receita2Page } from './receita2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Receita2PageRoutingModule
  ],
  declarations: [Receita2Page]
})
export class Receita2PageModule {}
