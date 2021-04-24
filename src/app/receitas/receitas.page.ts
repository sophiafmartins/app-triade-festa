import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type Categorias = 'entrada' | 'principal' | 'sobremesa' | 'lanche' | null;
type Tipos = 'doce' | 'salgado' | null;

interface receita {
  id: number,
  titulo: string,
  tipo: Tipos,
  categoria: Categorias,
  porcao: number,
  tempo: number,
  ingredientes: ingredientes[],
  modoPreparo: preparo[],
} 

interface ingredientes {
  titulo: string,
  descricao: string[]
}

interface preparo {
  titulo: string,
  descricao: string[]
}

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {
  public receitaId: number;
  public listaReceitas: receita[]=[
    {
      id: 1,
      titulo: 'Bolo de cenoura',
      tipo: 'doce',
      categoria: 'sobremesa',
      porcao: 8,
      tempo: 40,
      ingredientes: [
        {
          titulo: '',
          descricao: []
        },
        {
          titulo: 'Massa:',
          descricao: [
            '1/2 xícara (chá) de óleo',
            '3 cenouras médias raladas',
            '4 ovos',
            '2 xícaras (chá) de açúcar',
            '2 e 1/2 xícaras (chá) de farinha de trigo',
            '1 colher (sopa) de fermento em pó'
          ]
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: [
            '1 colher (sopa) de manteiga',
            '3 colheres (sopa) de chocolate em pó',
            '1 xícara (chá) de açúcar',
            '1 xícara (chá) de leite'
          ]
         }
      ],
  
      modoPreparo: [
        {
          titulo: '',
          descricao: []
        },
        {
          titulo: 'Massa:',
          descricao: [
            'Em um liquidificador, adicione a cenoura, os ovos e o óleo, depois misture. Acrescente o açúcar e bata novamente por 5 minutos.', 
            'Em uma tigela ou na batedeira, adicione a farinha de trigo e depois misture novamente. Acrescente o fermento e misture lentamente com uma colher.',
            'Asse em um forno preaquecido a 180° C por aproximadamente 40 minutos.'
          ]
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: [
            'Despeje em uma tigela a manteiga, o chocolate em pó, o açúcar e o leite, depois misture.',
            'Leve a mistura ao fogo e continue misturando até obter uma consistência cremosa, depois despeje a calda por cima do bolo.'
          ]
        }
      ]
    }



  ];



  constructor(private route: ActivatedRoute) { 
    this.receitaId = +route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
  }

}
