import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';


interface modeloEvento {
  id: number,
  nomeEvento: string,
  dataEvento: string,
  qtdConvidados: number,
  receitasEvento: []
};

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  constructor( public actionSheetCtrl: ActionSheetController,
    public router: Router ) { }

  ngOnInit() {
  }

  public meusEventos = [
    {
      id: 1,
      nomeEvento: 'Aniversario',
      dataEvento: '12/10/2021',
      qtdConvidados: 15
    }
  ];
  
  
  public removerEvento ( umEvento: modeloEvento ){
    const indice = this.meusEventos.indexOf(umEvento);
    this.meusEventos.splice(indice, 1);
  }

  public detalhesEvento(umEvento: modeloEvento){
    this.router.navigateByUrl("/detalhes-evento/"+umEvento.id);
  }
  
public editarEvento(umEvento){
  this.router.navigateByUrl('/edicao-evento/'+umEvento.id);
}

  public async opcoes (umEvento: modeloEvento) {
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

        cssClass: 'my-custom-modal-css'
      }
    );

    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
  }

}
