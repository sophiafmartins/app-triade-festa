import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

interface modeloEvento {
  id: number,
  nomeEvento: string,
  dataEvento: string,
  qtdConvidados: number,
  receitasEvento: []
};

@Component({
  selector: 'app-edicao-evento',
  templateUrl: './edicao-evento.page.html',
  styleUrls: ['./edicao-evento.page.scss'],
})
export class EdicaoEventoPage implements OnInit {

public evento1 = {
  id: 1,
  nomeEvento: 'Aniversario',
  dataEvento: '12/10/2021',
  qtdConvidados: 12
};
public evento;
public meusEventos = [];
public nomeEvento: string = this.evento1.nomeEvento;
  public dataEvento: string = this.evento1.dataEvento;
  public qtdConvidados: number = this.evento1.qtdConvidados;
  
  constructor(private route: ActivatedRoute) {
    const eventoId: number = +route.snapshot.paramMap.get('id')
    this.meusEventos.push(this.evento1);
    this.evento = this.meusEventos.find(e => e.id === eventoId)
  }

  ngOnInit() {
  }

  public editarEvento(){
    this.evento.nomeEvento = this.nomeEvento;
    this.evento.dataEvento = this.dataEvento;
    this.evento.qtdConvidados = this.qtdConvidados;
    
    for(let evento of this.meusEventos){
      if(evento.id == this.evento.id){
        const indice = this.meusEventos.indexOf(evento);
        this.meusEventos[indice] = this.evento;
      
        console.log(this.evento);
      }
    }
  }

}
