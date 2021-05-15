import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ModalFiltroComponent } from '../modal-filtro/modal-filtro.component';

import { Receita, ReceitasService} from '../services/receitas.service';


@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {

  public receitas: Receita[] = this.receitaService.receitas;

  public buscaAtivada: boolean = false;
  public filtroAtivado: boolean = false;
  public textoBusca: string;
  public filtrosSelecionados: string[] = null;
  public listaReceitas: Receita[] = this.receitas;
  public listaFiltrada: Receita[] = this.listaReceitas;
  public listaBusca: Receita[] = [];


  constructor(public modalCtrl: ModalController, private receitaService: ReceitasService) { }

  ngOnInit() {
  }


  public async irParaFiltro(){
    const modal = await this.modalCtrl.create({
      component: ModalFiltroComponent,
      cssClass: 'my-custom-modal-css'
    });

    modal.present();

    const { data } = await modal.onDidDismiss();
    console.log(data);

    this.filtrando(data);
    
  }

  public filtrando(lista){
    this.listaFiltrada = [];
    this.filtrosSelecionados = lista;

    if(this.filtrosSelecionados.length){
      this.filtroAtivado = true;
      for(let f of this.filtrosSelecionados){
        for(let r of this.listaReceitas){
          for(let i=0; i < r.ingrdFiltro.length; i++){
            if(r.tipo === f['nome'] || r.categoria === f['nome'] || r.ingrdFiltro[i] === f['nome']){
              if(!this.listaFiltrada.find(umaReceita => umaReceita === r)){
                this.listaFiltrada.push(r);
              }
            }
          }
        }
      }
    }else{
      this.listaFiltrada = this.listaReceitas;
      this.filtroAtivado = false;
    }
  }


  public buscando(){
    if(this.textoBusca.length != 0 && this.textoBusca.trim().length != 0){
      this.listaBusca = this.listaReceitas.filter(umaReceita => umaReceita.nome.toLowerCase().includes(this.textoBusca.toLowerCase()));
      this.buscaAtivada = true;
    }else{
      this.listaBusca = [];
      this.buscaAtivada = false;
    }
  }


  public ordenarReceitas(){
    if(this.listaBusca.length){
      this.listaBusca.sort(function (a, b) {
        return a.nome > b.nome ? 1 : ((b.nome > a.nome) ? -1 : 0);
      });
    }
    if(this.buscaAtivada === false){
      this.listaFiltrada.sort(function (a, b) {
        return a.nome > b.nome ? 1 : ((b.nome > a.nome) ? -1 : 0);
      });
    }
  }

  

}
