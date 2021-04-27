import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ReceitasEventoPage } from '../receitas-evento/receitas-evento.page';

interface modeloEvento {
  id: number,
  nomeEvento: string,
  dataEvento: string,
  qtdConvidados: number,
  receitasEvento: []
};

@Component({
  selector: 'app-detalhes-evento',
  templateUrl: './detalhes-evento.page.html',
  styleUrls: ['./detalhes-evento.page.scss'],
})
export class DetalhesEventoPage implements OnInit {

public evento;
public meusEventos = [
  {
    id: 1,
    nomeEvento: 'Aniversario',
    dataEvento: '12/10/2021',
    qtdConvidados: 15,
    receitasEvento: []
  }
];

  constructor(private router: ActivatedRoute, private modalCtrl: ModalController) {
    const eventoId: number = +router.snapshot.paramMap.get('id')
    this.evento = this.meusEventos.find(e => e.id === eventoId)
   }

  ngOnInit() {
  }

  public async receitasAdicionadas() {
    const modal = await this.modalCtrl.create(
      {
        component: ReceitasEventoPage,
        cssClass: 'my-custom-modal-css',
        swipeToClose: true
      }
    );

    return await modal.present();
    this.modalCtrl.dismiss();
  }
}
