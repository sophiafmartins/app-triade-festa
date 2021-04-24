import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

type Categorias = 'entrada' | 'principal' | 'sobremesa' | 'lanche' | null;
type Tipos = 'doce' | 'salgado' | null;

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
      tipo: 'doce',
      status: false
    },
    {
      tipo: 'salgado',
      status: false
    }
  ];

  public listaFiltroCategorias: filtroCategorias[] = [
    {
      categoria: 'entrada',
      status: false
    },
    {
      categoria: 'principal',
      status: false
    },
    {
      categoria: 'sobremesa',
      status: false
    },
    {
      categoria: 'lanche',
      status: false
    }
  ];

  public listaFiltroIngredientes: filtroIngredientes[] = [
    {
      ingrediente: 'cenoura',
      status: false
    },
    {
      ingrediente: 'chocolate',
      status: false
    },
    {
      ingrediente: 'frango',
      status: false
    },
    {
      ingrediente: 'carne',
      status: false
    },
    {
      ingrediente: 'coco',
      status: false
    },
    {
      ingrediente: 'leite condensado',
      status: false
    },
    {
      ingrediente: 'tomate',
      status: false
    },
    {
      ingrediente: 'arroz',
      status: false
    },
    {
      ingrediente: 'brócolis',
      status: false
    },
    {
      ingrediente: 'limão',
      status: false
    },
    {
      ingrediente: 'couve-flor',
      status: false
    },
    {
      ingrediente: 'laranja',
      status: false
    },{
      ingrediente: 'frutas',
      status: false
    },{
      ingrediente: 'milho',
      status: false
    },
    {
      ingrediente: 'batata',
      status: false
    },
    {
      ingrediente: 'mel',
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
