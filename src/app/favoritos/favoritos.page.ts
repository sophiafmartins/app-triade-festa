import { Component, OnInit } from '@angular/core';

type Categorias = 'Entrada' | 'Principal' | 'Sobremesa' | 'Lanche' | null;
type Tipos = 'Doce' | 'Salgado' | null;

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
      nome: 'Bolo de cenoura',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 8,
      tempo: 40,
      ingredientes: ['Óleo', 'Cenoura', 'Ovo', 'Açúcar', 'Farinha de trigo', 'Fermento em pó', 'Manteiga', 'Chocolate em pó', 'Leite']
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
      id: 9,
      nome: 'Brigadeiro',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 30,
      tempo: 25,
      ingredientes: ['Leite condensado', 'Margarina', 'Chocolate em pó', 'Achocolatado', 'Chocolate granulado']
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  public removerFavorito(umaReceita){
    this.listaFavoritos.splice(this.listaFavoritos.indexOf(umaReceita), 1);
  }

  

}
