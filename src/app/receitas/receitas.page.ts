import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receita, ReceitasService} from '../services/receitas.service';


@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {

  public receita: Receita;

  public receitaId: number;

  constructor(private route: ActivatedRoute, private receitaService: ReceitasService) { 
    this.receitaId = +route.snapshot.paramMap.get("id");
    this.receita = receitaService.getReceitaById(this.receitaId);
  }

  ngOnInit() {
  }

  public clicandoBotaoFavorito(){
    this.receita.favorito = !this.receita.favorito;
    this.receitaService.updateListaFavoritos(this.receita);
    
  }

}
