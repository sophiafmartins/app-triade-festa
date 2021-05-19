import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ReceitasEventoPage } from '../receitas-evento/receitas-evento.page';
import { EventosService } from 'src/app/services/eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-evento',
  templateUrl: './detalhes-evento.page.html',
  styleUrls: ['./detalhes-evento.page.scss'],
})
export class DetalhesEventoPage implements OnInit {

public idEvento: number;

  constructor(private router: ActivatedRoute, private modalCtrl: ModalController, private eventoLocal: EventosService, public route: Router) {
    this.idEvento = +router.snapshot.paramMap.get('id')
    this.evento = eventoLocal.getEventoById(this.idEvento);
   }

  public evento;
public meusEventos = this.eventoLocal.meusEventos;


  ngOnInit() {
  }

  public async receitasAdicionadas() {
    const modal = await this.modalCtrl.create(
      {
        component: ReceitasEventoPage,
        cssClass: 'my-custom-modal-css',
        componentProps: {
          'meusEventos': this.meusEventos.find(e => e.id === this.idEvento)
        },
        swipeToClose: true
      }
    );

    return await modal.present();
    this.modalCtrl.dismiss();
  
  
  
  }
  public voltar(){
    this.route.navigateByUrl('tabs/evento');
  }

}
