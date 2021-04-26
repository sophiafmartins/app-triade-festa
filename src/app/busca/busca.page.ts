import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ModalFiltroComponent } from '../modal-filtro/modal-filtro.component';

type Categorias = 'Entrada' | 'Principal' | 'Sobremesa' | 'Lanche' | null;
type Tipos = 'Doce' | 'Salgado' | null;

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
      nome: 'Bolo de cenoura',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 8,
      tempo: 40,
      ingredientes: ['Óleo', 'Cenoura', 'Ovo', 'Açúcar', 'Farinha de trigo', 'Fermento em pó', 'Manteiga', 'Chocolate em pó', 'Leite']
    },
    {
      id: 2,
      nome: 'Torta de frango',
      tipo: 'Salgado',
      categoria: 'Lanche',
      porcoes: 15,
      tempo: 40,
      ingredientes: ['Frango', 'Caldo de galinha', 'Óleo', 'Alho', 'Cebola', 'Tomate', 'Ervilha', 'Sal', 'Pimenta-do-reino', 'Leite', 'Ovo', 'Farinha de trigo', 'Fermento em pó', 'Queijo']
    },
    {
      id: 3,
      nome: 'Salada',
      tipo: 'Salgado',
      categoria: 'Entrada',
      porcoes: 6,
      tempo: 30,
      ingredientes: ['Alface', 'Cenoura', 'Beterraba', 'Tomate', 'Cebola', 'Sal', 'Açúcar', 'Azeite', 'Vinagre']
    },
    {
      id: 4,
      nome: 'Beijinho',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 50,
      tempo: 20,
      ingredientes: ['Leite condensado', 'Manteiga', 'Coco ralado', 'Açúcar', 'Cravos-da-índia']
    },
    {
      id: 5,
      nome: 'Torta de limão',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 15,
      tempo: 40,
      ingredientes: ['Biscoito de maisena', 'Margarina', 'Leite condensado', 'Creme de leite', 'Limão', 'Ovo', 'Açúcar']
    },
    {
      id: 6,
      nome: 'Macarrão bolonhesa',
      tipo: 'Salgado',
      categoria: 'Principal',
      porcoes: 6,
      tempo: 45,
      ingredientes: ['Cebola', 'Azeite', 'Azeitona', 'Molho de tomate', 'Caldo de carne', 'Cenoura', 'Tomate', 'Macarrão', 'Carne moída']
    },
    {
      id: 7,
      nome: 'Salada de frutas',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 6,
      tempo: 10,
      ingredientes: ['Leite condensado', 'Limão', 'Morango', 'Laranja', 'Kiwi', 'Manga', 'Frutas']
    },
    {
      id: 8,
      nome: 'Lasanha de frango',
      tipo: 'Salgado',
      categoria: 'Principal',
      porcoes: 4,
      tempo: 45,
      ingredientes: ['Frango', 'Queijo', 'Presunto', 'Massa de lasanha', 'Requeijão', 'Caldo de galinha', 'Leite', 'Creme de leite', 'Farinha', 'Manteiga', 'Cebola']
    },
    {
      id: 9,
      nome: 'Brigadeiro',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 30,
      tempo: 25,
      ingredientes: ['Leite condensado', 'Margarina', 'Chocolate em pó', 'Achocolatado', 'Chocolate granulado']
    },
    {
      id: 10,
      nome: 'Arroz com brócolis',
      tipo: 'Salgado',
      categoria: 'Principal',
      porcoes: 6,
      tempo: 30,
      ingredientes: ['Arroz', 'Alho', 'Azeite', 'Brócolis', 'Bicarbonato de sódio', 'Água', 'Sal']
    },
    {
      id: 11,
      nome: 'Bolo de laranja',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 12,
      tempo: 40,
      ingredientes: ['Ovo', 'Açúcar', 'Óleo', 'Laranja', 'Farinha de trigo', 'Fermento']
    },
    {
      id: 12,
      nome: 'Curau de milho',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 14,
      tempo: 15,
      ingredientes: ['Milho', 'Açúcar', 'Leite', 'Amido de milho']
    },
    {
      id: 13,
      nome: 'Couve-flor gratinada',
      tipo: 'Salgado',
      categoria: 'Entrada',
      porcoes: 8,
      tempo: 30,
      ingredientes: ['Couve-flor', 'Requeijão', 'Ovo', 'Queijo', 'Mussarela', 'Cheiro-verde', 'Tomate', 'Margarina']
    },
    {
      id: 14,
      nome: 'Batata recheada',
      tipo: 'Salgado',
      categoria: 'Entrada',
      porcoes: 2,
      tempo: 30,
      ingredientes: ['Batata', 'Sal', 'Pimenta-do-reino', 'Ovo', 'Queijo', 'Bacon', 'Creme de leite', 'Cebolinha']
    },
    {
      id: 15,
      nome: 'Esfiha de carne',
      tipo: 'Salgado',
      categoria: 'Lanche',
      porcoes: 30,
      tempo: 90,
      ingredientes: ['Fermento', 'Açúcar', 'Sal', 'Leite', 'Água', 'Ovo', 'Farinha de trigo', 'Óleo', 'Carne moída', 'Tomate', 'Cebola', 'Alho', 'Azeitona', 'Noz moscada', 'Salsinha', 'Cebolinha', 'Molho de pimenta', 'Gema', 'Gergelim']
    },
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
