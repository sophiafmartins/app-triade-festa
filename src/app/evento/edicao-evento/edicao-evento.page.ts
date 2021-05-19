import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ToastController } from '@ionic/angular';
import { EventosService, modeloEvento } from 'src/app/services/eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edicao-evento',
  templateUrl: './edicao-evento.page.html',
  styleUrls: ['./edicao-evento.page.scss'],
})
export class EdicaoEventoPage implements OnInit {

public evento: modeloEvento = {
  id: 0,
  nomeEvento: '',
  dataEvento: '',
  qtdConvidados: 0,
  receitasEvento: []
};
public meusEventos = this.eventoLocal.meusEventos;
  
  constructor(private route: ActivatedRoute, private eventoLocal: EventosService, public toastCtrl: ToastController, public router: Router) {
    const eventoId: number = +route.snapshot.paramMap.get('id')
    this.evento = {...this.meusEventos.find(e => e.id === eventoId)}
  }

  ngOnInit() {
  }

  public async editarEvento(){
    let toast;

    if(this.evento.nomeEvento.trim().length == 0){
      toast = await this.toastCtrl.create(
        {
          message: 'O campo Nome é obrigatório',
          duration: 2000
        }
      )
    }
    else if( this.evento.dataEvento.trim().length == 0){
      toast = await this.toastCtrl.create(
        {
          message: 'O campo Data é obrigatório',
          duration: 2000
        }
      )
    }
    else if( this.evento.qtdConvidados < 0){
      toast = await this.toastCtrl.create(
        {
          message: 'O numero de convidados não pode ser negativo',
          duration: 2000
        }
      )
    }
    else {
      toast = await this.toastCtrl.create(
        {
          message: 'Alterações salvas com sucesso',
          duration: 2000
        }
      )
      
      this.eventoLocal.edicaoEvento({...this.evento});
  
    this.evento.nomeEvento = '';
    this.evento.dataEvento = '';
    this.evento.qtdConvidados = 0;
    this.evento.receitasEvento = [];
    }

    toast.present();
    this.router.navigateByUrl('tabs/evento');
  }

}
