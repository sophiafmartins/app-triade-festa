import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receita, ReceitasService} from '../services/receitas.service';
import { ModalController } from '@ionic/angular';
import { ModalEventosPage } from './modal-eventos/modal-eventos.page';
import { EventosService, modeloReceitaEvento } from 'src/app/services/eventos.service'



@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {

  public receita: Receita;

  public receitaId: number;

  constructor(private route: ActivatedRoute, private receitaService: ReceitasService, private modalCtrl: ModalController, private eventoLocal: EventosService) { 
    this.receitaId = +route.snapshot.paramMap.get("id");
    this.receita = receitaService.getReceitaById(this.receitaId);
  }

  ngOnInit() {
  }

  public clicandoBotaoFavorito(){
    this.receita.favorito = !this.receita.favorito;
    this.receitaService.atualizandoListaFavoritos(this.receita);
    
  }

  public async abrirEventos(){
    const modal = await this.modalCtrl.create(
      {
        component: ModalEventosPage,
        cssClass: 'my-css-custom',
        componentProps: {
          'idReceita': this.receitaId
        }
      }
    );

    return await modal.present();
  }

}
