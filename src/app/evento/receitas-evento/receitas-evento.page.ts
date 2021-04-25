import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receitas-evento',
  templateUrl: './receitas-evento.page.html',
  styleUrls: ['./receitas-evento.page.scss'],
})
export class ReceitasEventoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public receitasEvento = [
    {
      tituloReceita: 'Bolo de cenoura',
      imgReceita: 'assets/images/receita1.png',
      qtdReceita: 2,
      urlReceita: '../receita1'
    },
    {
      tituloReceita: 'Torta de Frango',
      imgReceita: 'assets/images/receita2.png',
      qtdReceita: 3,
      urlReceita: ''
    },
    {
      tituloReceita: 'Salada',
      imgReceita: 'assets/images/receita3.png',
      qtdReceita: 6,
      urlReceita: ''
    }
  ];

  public removerReceita(umaReceita){
    const indice = this.receitasEvento.indexOf(umaReceita)
    this.receitasEvento.splice(indice, 1)
  }

}
