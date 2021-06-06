import { Component, OnInit } from '@angular/core';

import { Receita, ReceitasService} from '../services/receitas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  public receitas: Receita[] = this.receitaService.receitas;

  constructor(private receitaService: ReceitasService) { }

  public buscaAtivada: boolean = false;
  public textoBusca: string;
  public listaBusca: Receita[] = [];
  public listaReceitas: Receita[] = this.receitas;
    

  ngOnInit() {
  }

  public buscar(){
    if(this.textoBusca.length != 0 && this.textoBusca.trim().length != 0){
      this.listaBusca = this.listaReceitas.filter(umaReceita => umaReceita.nome.toLowerCase().includes(this.textoBusca.toLowerCase()));
      this.buscaAtivada = true;
    }else{
      this.listaBusca = [];
      this.buscaAtivada = false;
    }
  }

}
