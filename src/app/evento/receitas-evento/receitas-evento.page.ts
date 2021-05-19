import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventosService, modeloEvento, modeloReceitaEvento } from 'src/app/services/eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receitas-evento',
  templateUrl: './receitas-evento.page.html',
  styleUrls: ['./receitas-evento.page.scss'],
})
export class ReceitasEventoPage implements OnInit {

  
  @Input() meusEventos: modeloEvento;

  constructor(private modalCtrl: ModalController, private eventoLocal: EventosService, public route: Router) {
  }

  ngOnInit() {
  }

  public removerReceita( umaReceita ){
    const indice = this.meusEventos.receitasEvento.indexOf(umaReceita);
    this.meusEventos.receitasEvento.splice(indice, 1);
    this.eventoLocal.removerReceita(umaReceita.id, this.meusEventos.id);
  }

  public fecharReceitas(){
    this.modalCtrl.dismiss();
  }

  public navegarReceita( umaReceita: modeloReceitaEvento ){
    this.route.navigateByUrl('/receitas/'+umaReceita.idReceita);
    this.fecharReceitas();
  }

}
