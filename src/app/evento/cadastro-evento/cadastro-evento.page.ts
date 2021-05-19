import { Component, OnInit } from '@angular/core';
import { EventosService, modeloEvento, modeloReceitaEvento } from 'src/app/services/eventos.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.page.html',
  styleUrls: ['./cadastro-evento.page.scss'],
})
export class CadastroEventoPage implements OnInit {

  constructor(private eventoLocal: EventosService, private toastCtrl: ToastController, public route: Router) {  }

  ngOnInit() {
  }
  
  public meusEventos = this.eventoLocal.meusEventos;
  public novoEvento: modeloEvento = {
    id: 0,
    nomeEvento: '',
    dataEvento: '',
    qtdConvidados: 0,
    receitasEvento: []
  };

  public async cadastrarEvento(){
    let toast;
    
    if(this.novoEvento.nomeEvento.trim().length == 0){
      toast = await this.toastCtrl.create(
        {
          message: 'O campo Nome é obrigatório',
          duration: 2000
        }
      )
    }
    else if( this.novoEvento.dataEvento.trim().length == 0 ){
     toast = await this.toastCtrl.create(
        {
          message: 'O campo Data é obrigatório',
          duration: 2000
        }
      )
    }
    else if( this.novoEvento.qtdConvidados < 0 ){
      toast = await this.toastCtrl.create(
        {
          message: 'O número de convidados não pode ser negativo',
          duration: 2000
        }
      )
    }
    else {
      toast = await this.toastCtrl.create(
        {
          message: 'Evento cadastrado com sucesso',
          duration: 2000
        }
      )
      
      this.eventoLocal.adicionarEvento({...this.novoEvento});
      this.novoEvento.nomeEvento = '';
      this.novoEvento.dataEvento = '';
      this.novoEvento.qtdConvidados = 0;
      this.novoEvento.receitasEvento = [];
    
      this.route.navigateByUrl('tabs/evento');
    } 

    toast.present();
  }

}


