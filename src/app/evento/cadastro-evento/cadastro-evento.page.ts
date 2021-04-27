import { Component, OnInit } from '@angular/core';

interface modeloEvento {
  id: number,
  nomeEvento: string,
  dataEvento: string,
  qtdConvidados: number,
  receitasEvento: []
};

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.page.html',
  styleUrls: ['./cadastro-evento.page.scss'],
})
export class CadastroEventoPage implements OnInit {

  constructor() {}

  ngOnInit() {
  }
  public nomeEvento: string = '';
  public dataEvento: string;
  public qtdConvidados: number = 0;
  public meusEventos = [
    
  ];
  public contador: number = 1;
  

  public cadastrarEvento() {
    let eventoLocal = {
      id: this.contador,
      nomeEvento: this.nomeEvento,
      dataEvento: this.dataEvento,
      qtdConvidados: this.qtdConvidados,
      receitasEvento: []
    }
    
    this.meusEventos.push(eventoLocal);
    this.contador++;

    console.log(eventoLocal);
  }

}


