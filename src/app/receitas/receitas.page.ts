import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receita, ReceitasService} from '../services/receitas.service';


@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {
  
  public receitas: Receita[] = this.receitaService.receitas;
  
  public receitaId: number;
  public listaReceitas: Receita[] = this.receitas; 


  constructor(private route: ActivatedRoute, private receitaService: ReceitasService) { 
    this.receitaId = +route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
  }

}
