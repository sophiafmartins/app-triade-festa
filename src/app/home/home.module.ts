import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { CardReceitasComponent } from 'src/app/card-receitas/card-receitas.component';

import { CardInformesComponent } from 'src/app/card-informes/card-informes.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CardReceitasComponent, CardInformesComponent]
})
export class HomePageModule {}
