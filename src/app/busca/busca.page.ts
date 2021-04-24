import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ModalFiltroComponent } from '../modal-filtro/modal-filtro.component';

type Categorias = 'entrada' | 'principal' | 'sobremesa' | 'lanche' | null;
type Tipos = 'doce' | 'salgado' | null;

interface Receita {
  id: number,
  nome: string,
  tipo: Tipos,
  categoria: Categorias,
  porcoes: number,
  tempo: number,
  ingredientes: string[]
}

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {

  public buscaAtivada: boolean = false;
  public filtroAtivado: boolean = false;
  public textoBusca: string;
  public filtrosSelecionados: string[] = null;
  public listaReceitas: Receita[] = [
    {
      id: 1,
      nome: 'bolo de cenoura',
      tipo: 'doce',
      categoria: 'sobremesa',
      porcoes: 8,
      tempo: 40,
      ingredientes: ['óleo', 'cenoura', 'ovo', 'açúcar', 'farinha de trigo', 'fermento em pó', 'manteiga', 'chocolate em pó', 'leite']
    },
    {
      id: 2,
      nome: 'beijinho',
      tipo: 'doce',
      categoria: 'sobremesa',
      porcoes: 50,
      tempo: 20,
      ingredientes: ['leite condensado', 'manteiga', 'coco ralado', 'açúcar cristal', 'cravos-da-índia']
    },
    {
      id: 3,
      nome: 'brigadeiro',
      tipo: 'doce',
      categoria: 'sobremesa',
      porcoes: 30,
      tempo: 25,
      ingredientes: ['leite condensado', 'margarina', 'chocolate em pó', 'achocolatado', 'chocolate granulado']
    },
    {
      id: 4,
      nome: 'torta de frango',
      tipo: 'salgado',
      categoria: 'lanche',
      porcoes: 15,
      tempo: 40,
      ingredientes: ['frango', 'caldo de galinha', 'óleo', 'alho', 'cebola', 'tomate', 'ervilha', 'sal', 'pimenta-do-reino', 'leite', 'ovo', 'farinha de trigo', 'fermento em pó', 'queijo']
    },
    {
      id: 5,
      nome: 'lasanha de frango com queijo',
      tipo: 'salgado',
      categoria: 'principal',
      porcoes: 4,
      tempo: 45,
      ingredientes: ['frango', 'queijo', 'presunto', 'massa de lasanha', 'requeijão', 'caldo de galinha', 'leite', 'creme de leite', 'farinha', 'manteiga', 'cebola']
    },
    {
      id: 6,
      nome: 'esfiha de carne adaptada (receita turca)',
      tipo: 'salgado',
      categoria: 'lanche',
      porcoes: 30,
      tempo: 90,
      ingredientes: ['fermento', 'açúcar', 'sal', 'leite', 'água', 'ovo', 'farinha de trigo', 'óleo', 'carne moída', 'tomate', 'cebola', 'alho', 'azeitona', 'noz moscada', 'salsinha', 'cebolinha', 'molho de pimenta', 'gema', 'gergelim']
    },
    {
      id: 7,
      nome: 'arroz de brócolis',
      tipo: 'salgado',
      categoria: 'principal',
      porcoes: 6,
      tempo: 30,
      ingredientes: ['arroz', 'alho', 'azeite', 'brócolis', 'bicarbonato de sódio', 'água', 'sal']
    },
    {
      id: 8,
      nome: 'torta de limão',
      tipo: 'doce',
      categoria: 'sobremesa',
      porcoes: 15,
      tempo: 40,
      ingredientes: ['biscoito de maisena', 'margarina', 'leite condensado', 'creme de leite', 'limão', 'ovo', 'acúcar']
    },
    {
      id: 9,
      nome: 'couve-flor gratinada',
      tipo: 'salgado',
      categoria: 'principal',
      porcoes: 8,
      tempo: 30,
      ingredientes: ['couve-flor', 'requeijão', 'ovo', 'queijo', 'mussarela', 'cheiro-verde', 'tomate', 'margarina']
    },
    {
      id: 10,
      nome: 'bolo de laranja',
      tipo: 'doce',
      categoria: 'sobremesa',
      porcoes: 12,
      tempo: 40,
      ingredientes: ['ovo', 'açúcar', 'óleo', 'laranja', 'farinha de trigo', 'fermento']
    },
    {
      id: 11,
      nome: 'salada de frutas especial',
      tipo: 'doce',
      categoria: 'entrada',
      porcoes: 6,
      tempo: 10,
      ingredientes: ['leite condensado', 'limão', 'morango', 'laranja', 'kiwi', 'manga', 'frutas']
    },
    {
      id: 12,
      nome: 'curau de milho',
      tipo: 'doce',
      categoria: 'sobremesa',
      porcoes: 14,
      tempo: 15,
      ingredientes: ['milho verde', 'açúcar', 'leite', 'amido de milho']
    },
    {
      id: 13,
      nome: 'salada simples',
      tipo: 'salgado',
      categoria: 'entrada',
      porcoes: 6,
      tempo: 30,
      ingredientes: ['alface', 'cenoura', 'beterraba', 'tomate', 'cebola', 'sal', 'açúcar', 'azeite', 'vinagre']
    },
    {
      id: 14,
      nome: 'batata recheada',
      tipo: 'salgado',
      categoria: 'principal',
      porcoes: 2,
      tempo: 30,
      ingredientes: ['batata', 'sal', 'pimenta-do-reino', 'ovo', 'queijo', 'bacon', 'creme de leite', 'cebolinha']
    },
    {
      id: 15,
      nome: 'macarrão bolonhesa',
      tipo: 'salgado',
      categoria: 'principal',
      porcoes: 6,
      tempo: 45,
      ingredientes: ['cebola', 'azeite', 'azeitona', 'molho de tomate', 'caldo de carne', 'cenoura', 'tomate', 'macarrão', 'carne moída']
    }
  ]

  public listaFiltrada: Receita[] = this.listaReceitas;
  public listaBusca: Receita[] = [];


  constructor(public modalCtrl: ModalController) { }

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
          for(let i=0; i < r.ingredientes.length; i++){
            if(r.tipo === f['nome'] || r.categoria === f['nome'] || r.ingredientes[i] === f['nome']){
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
      this.listaBusca = this.listaReceitas.filter(umaReceita => umaReceita.nome.includes(this.textoBusca.toLowerCase()));
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
