import { Component, OnInit } from '@angular/core';

type Categorias = 'entrada' | 'principal' | 'sobremesa' | 'lanche' | null;
type Tipos = 'doce' | 'salgado' | null;

interface Favorito {
  id: number,
  nome: string,
  tipo: Tipos,
  categoria: Categorias,
  porcoes: number,
  tempo: number,
  ingredientes: string[]
}

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  public listaFavoritos: Favorito[] = [
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
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  public removerFavorito(umaReceita){
    this.listaFavoritos.splice(this.listaFavoritos.indexOf(umaReceita), 1);
  }

  

}
