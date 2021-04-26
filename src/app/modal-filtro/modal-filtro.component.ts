import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

type Categorias = 'Entrada' | 'Principal' | 'Sobremesa' | 'Lanche' | null;
type Tipos = 'Doce' | 'Salgado' | null;

interface filtroTipos {
  tipo: Tipos,
  status: boolean
}

interface filtroCategorias {
  categoria: Categorias,
  status: boolean
}

interface filtroIngredientes {
  ingrediente: string,
  status: boolean
}

interface filtros{
  nome: string,
  status: boolean
}


@Component({
  selector: 'app-modal-filtro',
  templateUrl: './modal-filtro.component.html',
  styleUrls: ['./modal-filtro.component.scss'],
})
export class ModalFiltroComponent implements OnInit {

  public listaFiltrosSelecionados: filtros[] = [];
  public listaFiltroTipos: filtroTipos[] = [
    {
      tipo: 'Doce',
      status: false
    },
    {
      tipo: 'Salgado',
      status: false
    }
  ];

  public listaFiltroCategorias: filtroCategorias[] = [
    {
      categoria: 'Entrada',
      status: false
    },
    {
      categoria: 'Principal',
      status: false
    },
    {
      categoria: 'Sobremesa',
      status: false
    },
    {
      categoria: 'Lanche',
      status: false
    }
  ];

  public listaFiltroIngredientes: filtroIngredientes[] = [
    {
      ingrediente: 'Cenoura',
      status: false
    },
    {
      ingrediente: 'Chocolate',
      status: false
    },
    {
      ingrediente: 'Frango',
      status: false
    },
    {
      ingrediente: 'Carne',
      status: false
    },
    {
      ingrediente: 'Coco',
      status: false
    },
    {
      ingrediente: 'Leite condensado',
      status: false
    },
    {
      ingrediente: 'Tomate',
      status: false
    },
    {
      ingrediente: 'Arroz',
      status: false
    },
    {
      ingrediente: 'Brócolis',
      status: false
    },
    {
      ingrediente: 'Limão',
      status: false
    },
    {
      ingrediente: 'Couve-flor',
      status: false
    },
    {
      ingrediente: 'Laranja',
      status: false
    },{
      ingrediente: 'Frutas',
      status: false
    },{
      ingrediente: 'Milho',
      status: false
    },
    {
      ingrediente: 'Batata',
      status: false
    },
    {
      ingrediente: 'Mel',
      status: false
    }
  ];


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}


  public obtendoFiltrosSelecionados(){
    this.listaFiltrosSelecionados = [];
    for(let t of this.listaFiltroTipos){
      let f: filtros = {
        nome: t.tipo,
        status: t.status
      }
      if(f.status == true){
        this.listaFiltrosSelecionados.push(f);
      }
    }

    for(let c of this.listaFiltroCategorias){
      let f: filtros = {
        nome: c.categoria,
        status: c.status
      }
      if(f.status == true){
        this.listaFiltrosSelecionados.push(f);
      }
    }

    for(let i of this.listaFiltroIngredientes){
      let f: filtros = {
        nome: i.ingrediente,
        status: i.status
      }
      if(f.status == true){
        this.listaFiltrosSelecionados.push(f);
      }
    }

  };

  fecharFiltro(){
    this.modalCtrl.dismiss(this.listaFiltrosSelecionados);
  }

}
