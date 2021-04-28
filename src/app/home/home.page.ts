import { Component, OnInit } from '@angular/core';

type Categorias = 'Entrada' | 'Principal' | 'Sobremesa' | 'Lanche' | null;
type Tipos = 'Doce' | 'Salgado' | null;

interface Receita {
  id: number,
  nome: string,
  tipo: Tipos,
  categoria: Categorias,
  porcoes: number,
  tempo: number,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public buscaAtivada: boolean = false;
  public textoBusca: string;
  public listaBusca: Receita[] = [];
  public listaReceitas: Receita[] = [
    {
      id: 1,
      nome: 'Bolo de cenoura',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 8,
      tempo: 40,
    },
    {
      id: 2,
      nome: 'Torta de frango',
      tipo: 'Salgado',
      categoria: 'Lanche',
      porcoes: 15,
      tempo: 40,
    },
    {
      id: 3,
      nome: 'Salada',
      tipo: 'Salgado',
      categoria: 'Entrada',
      porcoes: 6,
      tempo: 30,
    },
   {
      id: 4,
      nome: 'Beijinho',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 50,
      tempo: 20,
    },
    {
      id: 5,
      nome: 'Torta de limão',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 15,
      tempo: 40,
    },
    {
      id: 6,
      nome: 'Macarrão a bolonhesa',
      tipo: 'Salgado',
      categoria: 'Principal',
      porcoes: 6,
      tempo: 45,
    },
    {
      id: 7,
      nome: 'Salada de frutas',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 6,
      tempo: 10,
    },
    {
      id: 8,
      nome: 'Lasanha de frango',
      tipo: 'Salgado',
      categoria: 'Principal',
      porcoes: 4,
      tempo: 45,
    }, 
    {
      id: 9,
      nome: 'Brigadeiro',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 30,
      tempo: 25,
    },
    {
      id: 10,
      nome: 'Arroz com brócolis',
      tipo: 'Salgado',
      categoria: 'Principal',
      porcoes: 6,
      tempo: 30,
    },
    {
      id: 11,
      nome: 'Bolo de laranja',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 12,
      tempo: 40,
    },
    {
      id: 12,
      nome: 'Curau de milho',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 14,
      tempo: 15,
    },
    {
      id: 13,
      nome: 'Couve-flor gratinada',
      tipo: 'Salgado',
      categoria: 'Entrada',
      porcoes: 8,
      tempo: 30,
    },
    {
      id: 14,
      nome: 'Batata recheada',
      tipo: 'Salgado',
      categoria: 'Entrada',
      porcoes: 2,
      tempo: 30,
    },  
    {
      id: 15,
      nome: 'Esfiha de carne',
      tipo: 'Salgado',
      categoria: 'Lanche',
      porcoes: 30,
      tempo: 90,
    }
  ];

  constructor() { }

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
