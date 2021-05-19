import { Injectable } from '@angular/core';
import { ReceitasService, Receita } from '../services/receitas.service';
import { Storage } from '@ionic/storage-angular';

export interface modeloReceitaEvento {
  idEvento: number;
  idReceita: number;
  tituloReceita: string;
  qtdNecessaria: number;
  imgReceita: string;
}

export interface modeloEvento {
  id: number;
  nomeEvento: string;
  dataEvento: string;
  qtdConvidados: number;
  receitasEvento: modeloReceitaEvento[]
}


@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private receitas: ReceitasService, public storage: Storage, private receitasLocal: ReceitasService) { 
    this.loadFromStorage();
   }

  public contadorEventos: number = 0;
  public meusEventos: modeloEvento[] = [];
  public receitasCadastradas = this.receitas.receitas;
  public eventoGenerico: modeloEvento = {
    id: 0,
    nomeEvento: '',
    dataEvento: '',
    qtdConvidados: 0,
    receitasEvento: []
  }

  public adicionarEvento( novoEvento: modeloEvento ){
    for(let e of this.meusEventos){
      this.contadorEventos = e.id;
    }
    novoEvento.id = this.contadorEventos+1;
    this.meusEventos.push(novoEvento);
    this.contadorEventos += 1;
    this.saveToStorage();
  }

  public edicaoEvento( novoEvento: modeloEvento ){
    const buscaEvento = this.meusEventos.find(e => e.id === novoEvento.id);
    const indice = this.meusEventos.indexOf(buscaEvento);
    this.meusEventos[indice] = novoEvento;
    for(let umaReceita of this.receitasLocal.receitas){
      for(let i=0; i<novoEvento.receitasEvento.length; i++){
        if(novoEvento.receitasEvento[i].idReceita == umaReceita.id){
          if(novoEvento.qtdConvidados == 0){
            novoEvento.receitasEvento[i].qtdNecessaria = 1;
          }
          else {
            novoEvento.receitasEvento[i].qtdNecessaria = Math.ceil(novoEvento.qtdConvidados/umaReceita.porcoes);
          }
        }
      }
    }
    this.saveToStorage();
  }

  public removerEvento( deletarEvento: modeloEvento ){
    //this.meusEventos.splice(this.meusEventos.indexOf(deletarEvento) ,1);
    
    const index = this.meusEventos.findIndex(e => e.id === deletarEvento.id);
    this.meusEventos.splice(index, 1);
    this.saveToStorage();
  }

  
  public adicionarReceita( indiceReceita: number, umEvento: modeloEvento ){
    const buscaReceita = {...this.receitasCadastradas.find(r => r.id === indiceReceita)};
    
    let qtdPreparo: number;
    if(umEvento.qtdConvidados == 0){
      qtdPreparo = 1;
    }
    else {
      qtdPreparo = Math.ceil(umEvento.qtdConvidados/buscaReceita.porcoes);
    }
    
    let dadosReceita: modeloReceitaEvento = {
      idEvento: umEvento.id,
      idReceita: buscaReceita.id,
      tituloReceita: buscaReceita.nome,
      qtdNecessaria: qtdPreparo,
      imgReceita: 'assets/images/receita'+indiceReceita+'.png'
    }
    
    umEvento.receitasEvento.push(dadosReceita);
    this.saveToStorage();
  }

  public removerReceita( indiceReceita: number, indiceEvento: number ){
    const buscaEvento = this.meusEventos.find(e => e.id === indiceEvento);
    buscaEvento.receitasEvento.splice(indiceReceita, 1);
    this.saveToStorage();
  }

  public getEventoById( id: number ){
    return { ...this.meusEventos.find(e => e.id === id)};
  }

  private saveToStorage(){
    this.storage.set("eventos", this.meusEventos);
  }
  
  private async loadFromStorage(){
    const loadedEventos = await this.storage.get("eventos");
    if(loadedEventos){
      this.meusEventos.push(...loadedEventos);
    }
  }
  
    

}
