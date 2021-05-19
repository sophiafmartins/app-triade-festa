import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { of } from 'rxjs';
import { EventosService, modeloEvento } from 'src/app/services/eventos.service';
import { ReceitasService } from 'src/app/services/receitas.service';

@Component({
  selector: 'app-modal-eventos',
  templateUrl: './modal-eventos.page.html',
  styleUrls: ['./modal-eventos.page.scss'],
})
export class ModalEventosPage implements OnInit {

  constructor(private modalCtrl: ModalController, private eventoLocal: EventosService, private receitaLocal: ReceitasService ) {
  }

  @Input() idReceita: number;
   public meusEventos = this.eventoLocal.meusEventos;
   
   public incluirReceita( idUmaReceita: number, umEvento: modeloEvento ){
    this.eventoLocal.adicionarReceita(idUmaReceita, umEvento); 
  }
  
  ngOnInit() {
  }

  public fecharEventos(){
    this.modalCtrl.dismiss();
  }
  
  public verificar( umEvento: modeloEvento ){
    for(let r of umEvento.receitasEvento ){
      if(r.idReceita == this.idReceita){
        return true;
      }
    }
    return false;
  }

}
