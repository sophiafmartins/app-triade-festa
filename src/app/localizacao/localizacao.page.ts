import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.page.html',
  styleUrls: ['./localizacao.page.scss'],
})
export class LocalizacaoPage implements OnInit {

  public cepDigitado: string;
  public imgMapa: string;
  public localizacaoAtivada: boolean = false
  public listaCeps: Object[] = [
    {
      cep: '04272000',
      imagem: 'assets/images/mapa04272000.png'
    },
    {
      cep: '04264100',
      imagem: 'assets/images/mapa04264100.png'
    },
    {
      cep: '88111520',
      imagem: 'assets/images/mapa88111520.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  public buscandoMapa(){
    this.localizacaoAtivada = false
    this.imgMapa = '';
    for(let i of this.listaCeps){
      if(i['cep']===this.cepDigitado){
        this.imgMapa=i['imagem'];
        this.localizacaoAtivada = true;
      }
    }
  }

}
