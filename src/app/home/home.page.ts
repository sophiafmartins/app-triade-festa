import { Component, OnInit } from '@angular/core';

import { Receita, ReceitasService} from '../services/receitas.service';

import { Informe, InformesService} from '../services/informes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  public receitas: Receita[] = this.receitaService.receitas;
  public informes: Informe[] = this.informeService.informes;


  constructor(private receitaService: ReceitasService, private informeService: InformesService) { }

  public buscaAtivada: boolean = false;
  public textoBusca: string;
  public listaBuscaReceitas: Receita[] = [];
  public listaBuscaInformes: Informe[] = [];
  public listaReceitas: Receita[] = this.receitas;
  public listaInformes: Informe[] = this.informes;
    

  ngOnInit() {
  }

  public buscar(){
    if(this.textoBusca.length != 0 && this.textoBusca.trim().length != 0){
      this.listaBuscaReceitas = this.listaReceitas.filter(umaReceita => umaReceita.nome.toLowerCase().includes(this.textoBusca.toLowerCase()));

      this.listaBuscaInformes = this.listaInformes.filter(umInforme => umInforme.nome.toLowerCase().includes(this.textoBusca.toLowerCase()));

      this.buscaAtivada = true;
    }else{
      this.listaBuscaReceitas = [];
      this.listaBuscaInformes = [];
      this.buscaAtivada = false;
    }
  }

}