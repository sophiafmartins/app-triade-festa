import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  constructor( public actionSheetCtrl: ActionSheetController, public router: Router, public eventoLocal: EventosService ) { }

  ngOnInit() {
  }

  public meusEventos = this.eventoLocal.meusEventos;
  
  public removerEvento ( umEvento ){
    //const indice = this.meusEventos.indexOf(umEvento);
    //this.meusEventos.splice(indice, 1);
    this.eventoLocal.removerEvento(umEvento);
  }

  public detalhesEvento(umEvento ){
    this.router.navigateByUrl("/detalhes-evento/"+umEvento.id);
  }
  
public editarEvento(umEvento){
  this.router.navigateByUrl('/edicao-evento/'+umEvento.id);
}

  public async opcoes (umEvento ) {
    const actionSheet = await this.actionSheetCtrl.create(
      {
        header: 'Opções',
        buttons: [
          {
            text: 'Detalhes',
            role: 'detalhes',
            handler: () => this.detalhesEvento(umEvento)
          },
          {
            text: 'Excluir',
            role: 'excluir',
            handler: () => this.removerEvento(umEvento)
          },
          {
            text: 'Editar',
            role: 'editar',
            handler: () => this.editarEvento(umEvento)
          },
          {
            text: 'Cancelar',
            role: 'cancelar',
            handler: () => { return }
          }
        ],

        cssClass: 'my-custom-action-sheet-css'
      }
    );

    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
  }

}
