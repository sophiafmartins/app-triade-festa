import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';


export type Categorias = 'Entrada' | 'Principal' | 'Sobremesa' | 'Lanche' | null;
export type Tipos = 'Doce' | 'Salgado' | null;

export interface Ingredientes {
  titulo: string,
  descricao: string[]
}

export interface Preparo {
  titulo: string,
  descricao: string[]
}

export interface Receita {
  categoria: Categorias,
  favorito: boolean,
  id: number,
  ingrdFiltro: string[],
  ingredientes: Ingredientes[],
  modoPreparo: Preparo[],
  nome: string,
  porcoes: number,
  tempo: number,
  tipo: Tipos
  
}


@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  public receitas;
  public rc;


  public async pegarDadosReceitasFirebase(){
    const url = "https://host-cheff-default-rtdb.firebaseio.com/receitas.json?auth=";
    const result = await this.http.get(url).toPromise();
    this.rc = Object.keys(result).map(i => result[i])
    this.rc.splice(0, 1);
    this.trataDados();
    this.receitas = this.rc;
    
  }

  public trataDados(){
    for(let r of this.rc){
      r["ingrdFiltro"] = r["ingrdFiltro"].split("|");
      r["ingredientes"] = Object.keys(r["ingredientes"]).map(i => r["ingredientes"][i]);
      r["modoPreparo"] = Object.keys(r["modoPreparo"]).map(i => r["modoPreparo"][i]);
      
      for(let i of r["ingredientes"]){
        i["descricao"] = i["descricao"].split("&");
        
        if(i["descricao"] === [" "]){
          i["descricao"] = [];
        }

        console.log(i["descricao"])
      }

      
      for(let m of r["modoPreparo"]){
        m["descricao"] = m["descricao"].split("&");
        
        if(m["descricao"] === [" "]){
          m["descricao"] = [];
        }
      }

    }
  }


  private saveToStorage(){
    this.storage.set("favoritos", this.listaFavoritos);
  }

  private async loadFromStorage(){
    const loadedFavoritos = await this.storage.get("favoritos");
    if(loadedFavoritos){
      this.listaFavoritos.push(...loadedFavoritos);
    }
  }

  constructor(private storage: Storage, private http: HttpClient) {
    this.pegarDadosReceitasFirebase();
    this.loadFromStorage();
  }


  public listaFavoritos: Receita[] = [];

  public getReceitaById(id: number){
    return { ...this.receitas.find(r => r["id"] === id) };
  }

  public atualizandoReceita(umaReceita: Receita){
    const index = this.receitas.findIndex(r => r["id"] === umaReceita.id);
    this.receitas[index] = umaReceita;
  }

  public atualizandoFavorito(umaReceita: Receita){
    const index = this.listaFavoritos.findIndex(f => f["id"] === umaReceita["id"]);
    this.listaFavoritos[index] = umaReceita;
    this.saveToStorage();
  }

  public adicionandoFavorito(umaReceita: Receita){
    this.listaFavoritos.push(umaReceita);
    this.saveToStorage();
  }

  public removendoFavorito(umaReceita: Receita){
    const i = this.listaFavoritos.findIndex(f => f["id"] === umaReceita["id"]);
    this.listaFavoritos.splice(i, 1);
    this.saveToStorage();
  }


  public atualizandoListaFavoritos(umaReceita: Receita){
    this.atualizandoReceita(umaReceita);
    const procurar = this.listaFavoritos.find(r => r["id"] === umaReceita["id"]);

    if(procurar != null){
      this.atualizandoFavorito(umaReceita);
    }

    if(umaReceita["favorito"] === true){
      if(procurar == null){
        this.adicionandoFavorito(umaReceita);
      }
    }else if(umaReceita["favorito"] === false){
      if(procurar != null){
        this.removendoFavorito(umaReceita);
      }
    }
  }



}
