import { Component, OnInit } from '@angular/core';
import { Receita, ReceitasService} from '../services/receitas.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  public listaFavoritos: Receita[] = [];

  constructor(private receitaService: ReceitasService) {
    this.listaFavoritos = this.receitaService.listaFavoritos;
  }

  ngOnInit() {
  }

  public removerFavorito(umaReceita){
    umaReceita["favorito"] = false;
    this.receitaService.atualizandoListaFavoritos(umaReceita);

  }


  

}
