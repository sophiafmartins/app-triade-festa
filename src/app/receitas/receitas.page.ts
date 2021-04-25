import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type Categorias = 'Entrada' | 'Principal' | 'Sobremesa' | 'Lanche' | null;
type Tipos = 'Doce' | 'Salgado' | null;

interface receita {
  id: number,
  nome: string,
  tipo: Tipos,
  categoria: Categorias,
  porcoes: number,
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
    //Bolo de cenoura
    {
      id: 1,
      nome: 'Bolo de cenoura',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 8,
      tempo: 40,
      ingredientes: [
        {
          titulo: '',
          descricao: []
        },
        {
          titulo: 'Massa:',
          descricao: [
            '3 cenouras médias raladas',
            '4 ovos',
            '1/2 xícara (chá) de óleo',
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
         },
        {
          titulo: 'Molho:',
          descricao: []
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
            'Em um liquidificador, bata a cenoura, os ovos e o óleo.',
            'Acrescente o açúcar e bata novamente por 5 minutos.',
            'Passe a mistura para uma tigela ou batedeira e acrescente farinha de trigo. Mexa até ficar uma massa homogênea',
            'Acrescente o fermento e misture lentamente com uma colher.',
            'Despeje a massa em uma forma untada e enfarinhada e leve ao forno (preaquecido a 180° C) por aproximadamente 40 minutos.'
          ]
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: [
            'Misture em uma tigela a manteiga, o chocolate em pó, o açúcar e o leite.',
            'Leve a mistura ao fogo e mexa até obter uma consistência cremosa. Assim que estiver pronto, despeje a calda por cima do bolo.'
          ]
        },
        {
          titulo: 'Molho:',
          descricao: []
        }
      ]
    },


    //Torta de frango
    {
      id: 2,
      nome: 'Torta de frango',
      tipo: 'Salgado',
      categoria: 'Lanche',
      porcoes: 15,
      tempo: 40,
      ingredientes: [
        {
          titulo: '',
          descricao: []
        },
        {
          titulo: 'Massa:',
          descricao: [
            '250 ml de leite',
            '3/4 de xícara (chá) de óleo',
            '2 ovos',
            '1 e 1/2 xícara (chá) de farinha de trigo',
            'Sal a gosto',
            '1 colher (sopa) de fermento em pó',
            'Queijo ralado a gosto'
          ]
        },
        {
          titulo: 'Recheio:',
          descricao: [
            '500 g de peito de frango sem pele',
            '1/2 litro de caldo de galinha',
            '4 colheres (sopa) de óleo',
            '1 dente de alho amassado',
            '1 cebola picada',
            '3 tomates sem pele e sem sementes',
            '1 xícara (chá) de ervilhas',
            'Sal e pimenta-do-reino a gosto'
          ]
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
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
            'Bata o leite, o óleo e os ovos no liquidificador em velocidade baixa.',
            'Acrescente aos poucos a farinha, o sal e o fermento.',
            'Despeje metade da massa em uma forma untada e adicione o recheio sobre ela.',
            'Cubra com o restante de massa e o queijo ralado.',
            'Leve ao forno pré-aquecido (180° C) até dourar.'
          ]
        },
        {
          titulo: 'Recheio:',
          descricao: [
            'Cozinhe o peito de frango no caldo de galinha até ficar macio.',
            'Separe 1 xícara (chá) de caldo do cozimento e reserve.',
            'Refogue os demais ingredientes e acrescente as ervilhas por último.',
            'Desfie o frango, misture ao caldo que estava reservado e deixe cozinhar até secar.'
          ]
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
        }
      ]
    },


    //Salada
    {
      id: 3,
      nome: 'Salada',
      tipo: 'Salgado',
      categoria: 'Entrada',
      porcoes: 6,
      tempo: 30,
      ingredientes: [
        {
          titulo: '',
          descricao: [
            '1 alface americana',
            '2 cenouras raladas',
            '1 beterraba ralada',
            '1 tomate sem pele e sem semente',
            '1 cebola cortada em rodelas ou picada'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: [
            '1 pitada de açúcar',
            '1 colher (chá) de sal',
            '1 colher (sopa) de azeite extra virgem de oliva',
            '2 a 3 colheres (sopa) de vinagre'
          ]
        }
      ],
  
      modoPreparo: [
        {
          titulo: '',
          descricao: [
            'Lave bem todos os ingredientes.',
            'Rasgue as folhas da alface para que fiquem menores. ',
            'Rale as cenouras e a beterraba.',
            'O tomate, após estar sem pele e semente, deve ser picado.',
            'A cebola pode ser cortada em pedacinhos ou em rodelas, como preferir.',
            'Junte tudo.'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: [
            'Junte o açúcar, o sal, o azeite e o vinagre em uma xícara.',
            'Misture bem com uma colher e despeje sobre a salada.'
          ]
        }
      ]
    },


    //Beijinho
    {
      id: 4,
      nome: 'Beijinho',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 50,
      tempo: 20,
      ingredientes: [
        {
          titulo: '',
          descricao: [
            '2 latas de leite condensado',
            '2 colheres (sopa) de manteiga',
            '300 g de coco fresco ralado (fino)',
            'Açúcar cristal',
            'Cravos-da-índia a gosto'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
        }

      ],
  
      modoPreparo: [
        {
          titulo: '',
          descricao: [
            'Em uma panela, misture o leite condensado, a manteiga e o coco ralado.',
            'Leve ao fogo e mexa por aproximadamente 15 minutos.',
            'Retire a mistura do fogo e deixe amornar.',
            'Modele a massa em formato de bolinha, passe pelo açúcar cristal ou coco ralado e finalize com cravos-da-índia.'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
        }
      ]
    },


    //Torta de limão
    {
      id: 5,
      nome: 'Torta de limão',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 15,
      tempo: 40,
      ingredientes: [
        {
          titulo: '',
          descricao: []
        },
        {
          titulo: 'Massa:',
          descricao: [
            '200 g de biscoito de maisena',
            '150 g de margarina'
          ]
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: [
            '1 lata de leite condensado',
            '1 caixinha de creme de leite',
            'Suco de 4 limões',
            'Raspas de 2 limões' 
          ]
        },
        {
          titulo: 'Molho:',
          descricao: []
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
            'Triture o biscoito em um liquidificador ou processador.',
            'Junte a margarina e bata mais um pouco.',
            'Despeje a massa em uma forma de fundo removível (27 cm de diâmetro).',
            'Com as mãos, espalhe os biscoitos triturados no fundo e nas laterais da forma, cobrindo toda área de maneira uniforme.',
            'Leve ao forno médio (180° C), preaquecido, por aproximadamente 10 minutos.'
          ]
        },
        {
          titulo: 'Recheio:',
          descricao: [
            'Bata o leite condensado, o creme de leite e o suco de limão no liquidificador até obter um creme liso e firme.',
            'Adicione as raspas de limão e mexa com uma colher.',
            'Recheie a massa já assada e fria e leve à geladeira por 30 minutos.'
          ]
        },
        {
          titulo: 'Cobertura:',
          descricao: [
            'Bata as claras em neve e acrescente o açúcar.',
            'Misture até obter um ponto de suspiro e leve ao forno até dourar.',
            'Desenforme a torta (sem retirar o fundo falso), despeje a cobertura e acrescente as raspas de limão.'
          ]
        },
        {
          titulo: 'Molho:',
          descricao: []
        }
      ]
    },


    //Macarrão a bolonhesa
    {
      id: 6,
      nome: 'Macarrão a bolonhesa',
      tipo: 'Salgado',
      categoria: 'Principal',
      porcoes: 6,
      tempo: 45,
      ingredientes: [
        {
          titulo: '',
          descricao: [
            '1 cebola',
            '1 colher de sopa de azeite de oliva',
            '500 g de carne moída',
            '2 cubos de caldo de carne ou legumes dissolvidos em 100 ml de água',
            '2 latas de molho de tomate pronto',
            '2 tomates picados',
            '1 cenoura cortada ao meio',
            '5 azeitonas verdes picadas',
            'Sal a gosto',
            '500 g de macarrão',
            'Água',
            'Queijo ralado a gosto'

          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
        }

      ],
  
      modoPreparo: [
        {
          titulo: '',
          descricao: [
            'Pique a cebola e refogue no azeite até dourar, mexendo para não queimar.',
            'Misture a carne moída e deixe cozinhar por alguns minutos.',
            'Adicione o caldo, o molho, o tomate, a cenoura, a azeitona, o sal e mexa bem. Deixe cozinhar por aproximadamente 40 minutos em fogo baixo com a panela semi tampada.', 
            'Descarte a cenoura depois que o molho estiver pronto (você pode utilizá-la em outra receita).',
            'Em uma panela, adicione a água em uma quantidade suficiente para cozinhar o macarrão e leve ao fogo alto. Após ferver, acrescente o sal e o macarrão.',
            'Quando o macarrão estiver pronto, escorra e reserve.',
            'Em uma travessa/panela, misture o molho ao macarrão.',
            'Sirva com o queijo ralado por cima.'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
        }
      ]
    },


    //Salada de frutas
    {
      id: 7,
      nome: 'Salada de frutas',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 6,
      tempo: 10,
      ingredientes: [
        {
          titulo: '',
          descricao: [
            '1 lata de leite condensado',
            '1/2 xícara (chá) de suco de limão',
            'Raspas de limão',
            '4 xícaras (chá) de frutas picadas a sua escolha (morango, laranja, kiwi, manga)'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
        }

      ],
  
      modoPreparo: [
        {
          titulo: '',
          descricao: [
            'Misture o leite condensado, o suco e a raspa de limão até obter um creme consistente.',
            'Distribua o creme em taças e enfeite com as frutas.',
            'Sirva gelado.'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
        }
      ]
    },


    //Lasanha de frango
    {
      id: 8,
      nome: 'Lasanha de frango',
      tipo: 'Salgado',
      categoria: 'Principal',
      porcoes: 4,
      tempo: 45,
      ingredientes: [
        {
          titulo: '',
          descricao: [
            '1 peito de frango',
            'Água',
            '1 cebola',
            '1 colher (sopa) de manteiga',
            '1 caldo de galinha (ou tempero completo sabor galinha)',
            '1 pacote de massa para lasanha (direto ao forno, sem cozimento prévio)',
            '400 g de presunto fatiado',
            '500 g de queijo muçarela fatiado',
            '1 pote de requeijão cremoso'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: [
            '2 colheres (sopa) de farinha',
            '2 colheres (sopa) de manteiga',
            '1 cebola média',
            '2 copos de leite',
            '1 caldo de galinha',
            '1 caixa de creme de leite'
          ]
        }

      ],
  
      modoPreparo: [
        {
          titulo: '',
          descricao: [
            'Cozinhe o peito de frango na água e após cozido, desfie-o.',
            'Pique a cebola em pedaços pequenos, coloque em uma panela e doure com a manteiga.',
            'Acrescente o frango e o caldo de galinha, mexa sempre até o frango ficar totalmente dourado.',
            'Em um refratário, coloque 2 conchas de molho e por cima adicione a massa de lasanha.',
            'Cubra com 1 camada de presunto, 1 de queijo e 1 de frango (seguindo esta ordem).',
            'Sobre o frango, coloque 1 camada de requeijão e 2 conchas de molho.',
            'Cubra o requeijão com 1 camada de presunto, 1 camada de queijo e 1 camada de massa. Por último coloque o molho.',
            'Repita esse processo até faltar cerca de 2,5 cm para chegar a borda do refratário.',
            'Para finalizar, cubra a lasanha com muito queijo, requeijão e molho.',
            'Asse por, aproximadamente, 20 minutos em fogo baixo.'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: [
            'Em uma panela, faça um creme homogêneo com a farinha e a manteiga ',
            'Acrescente o leite, o caldo de galinha e mexa constantemente.',
            'Retire do fogo, acrescente o creme de leite, misture bem e reserve.'
          ]
        }
      ]
    },


    //Brigadeiro
    {
      id: 9,
      nome: 'Brigadeiro',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 30,
      tempo: 25,
      ingredientes: [
        {
          titulo: '',
          descricao: [
            '1 caixinha de leite condensado',
            '1 colher (sopa) de margarina sem sal',
            '4 colheres (sopa) de achocolatado ou chocolate em pó',
            'Chocolate granulado'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
        }

      ],
  
      modoPreparo: [
        {
          titulo: '',
          descricao: [
            'Em uma panela funda, acrescente o leite condensado, a margarina e o chocolate em pó.',
            'Cozinhe em fogo médio e mexa até que o brigadeiro comece a desgrudar da panela. Deixe esfriar.',
            'Modele a massa em formato de bolinha e passe pelo chocolate granulado.'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
        }
      ]
    },


    //Arroz com brócolis
    {
      id: 10,
      nome: 'Arroz com brócolis',
      tipo: 'Salgado',
      categoria: 'Principal',
      porcoes: 6,
      tempo: 30,
      ingredientes: [
        {
          titulo: '',
          descricao: [
            '2 maços de brócolis fresco',
            'Água',
            'Sal a gosto',
            '20 g de bicabornato de sódio',
            '100 g de alho',
            '3 colheres de azeite',
            '500 g de arroz cozido com alho'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
        }

      ],
  
      modoPreparo: [
        {
          titulo: '',
          descricao: [
            'Limpe o brócolis e descasque os talos (retirando a pele com a faca). Aproveite talos e folhas.', 
            'Em uma panela, adicione água em uma quantidade suficiente para cobrir o brócolis, o sal, o bicabornato e o brócolis. Cozinhe até que o talo fique macio e, depois de pronto, escorra e reserve.',
            'Aproveite e a mesma panela e frite o alho no azeite até que fique dourado. Junte o brócolis e refogue.',
            'Adicione o arroz cozido e misture até que fique uniforme.'

          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
        }
      ]
    },

    
    //Bolo de laranja
    {
      id: 11,
      nome: 'Bolo de laranja',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 12,
      tempo: 40,
      ingredientes: [
        {
          titulo: '',
          descricao: [
            '4 ovos',
            '2 xícaras (chá) de açúcar',
            '1 xícara (chá) de óleo',
            'Suco de 2 laranjas',
            'Casca de 1 laranja',
            '2 xícaras (chá) de farinha de trigo',
            '1 colher (sopa) de fermento',
            'Suco de laranja para cobrir'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
        }

      ],
  
      modoPreparo: [
        {
          titulo: '',
          descricao: [
            'Bata no liquidificador o ovo, o açúcar, o óleo, o suco e a casca da laranja.',
            'Passe a mistura para uma tigela ou batedeira e acrescente farinha de trigo. Mexa até ficar uma massa homogênea.',
            'Acrescente o fermento e misture lentamente com uma colher.',
            'Despeje a massa em uma forma com furo central, untada e enfarinhada, e leve ao forno (preaquecido a 180° C) por aproximadamente 30 minutos.',
            'Desenforme o bolo e molhe com suco de laranja.'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
        }
      ]
    },


    //Curau de milho
    {
      id: 12,
      nome: 'Curau de milho',
      tipo: 'Doce',
      categoria: 'Sobremesa',
      porcoes: 14,
      tempo: 15,
      ingredientes: [
        {
          titulo: '',
          descricao: [
            '2 latas de milho verde (600 g)',
            '1 e 1/2 xícara de açúcar',
            '1 litro de leite',
            '3 colheres (sopa) de amido de milho',
            'Canela em pó'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
        }

      ],
  
      modoPreparo: [
        {
          titulo: '',
          descricao: [
            'Bata o milho, o açúcar, o leite e o amido no liquidificador.',
            'Caso prefira, pode peneirar a mistura.',
            'Em uma panela, adicione a mistura e leve ao fogo alto, mexendo até ficar cremoso.',
            'Distribua o creme em taças e após esfriar polvilhe canela em pó.'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
        }
      ]
    },


    //Couve-flor gratinada
    {
      id: 13,
      nome: 'Couve-flor gratinada',
      tipo: 'Salgado',
      categoria: 'Entrada',
      porcoes: 8,
      tempo: 30,
      ingredientes: [
        {
          titulo: '',
          descricao: [
            '1 couve-flor média',
            'Água',
            'Sal a gosto',
            'Margarina para untar',
            '1 copo de requeijão',
            '2 ovos',
            '50 g de queijo ralado',
            'Cheiro-verde',
            '1 tomate picado',
            '200 g de muçarela'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
        }

      ],
  
      modoPreparo: [
        {
          titulo: '',
          descricao: [
            'Limpe a couve-flor e coloque-a em uma panela com água (em uma quantidade suficiente para cobri-la) a o sal. Cozinhe até que o talo fique macio e, depois de pronto, escorra.',
            'Em uma forma untada com margarina, adicione a couve-flor e espalhe o requeijão por toda a superfície.',
            'Bata os ovos e adicione 25 g de queijo ralado, o cheiro-verde e o tomate.',
            'Despeje essa mistura por cima da couve-flor e cubra com a muçarela.',
            'Finalize polvilhando com o restante do queijo ralado.',
            'Leve ao forno para gratinar.'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: [
            
          ]
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
        }
      ]
    },

    
    //Batata recheada
    {
      id: 14,
      nome: 'Batata recheada',
      tipo: 'Salgado',
      categoria: 'Entrada',
      porcoes: 2,
      tempo: 30,
      ingredientes: [
        {
          titulo: '',
          descricao: [
            '2 batatas médias cozidas',
            'Sal a gosto',
            'Pimenta-do-reino a gosto',
            '1 ovo',
            '180 g de queijo muçarela',
            'Bacon frito picado em cubinhos a gosto',
            '1/2 lata de creme de leite',
            'Cebolinha a gosto'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
        }

      ],
  
      modoPreparo: [
        {
          titulo: '',
          descricao: [
            'Retire a polpa das batatas, deixando uma cavidade e reserve.',
            'Em uma tigela, adicione a polpa das batatas, o sal, a pimenta, o ovo, a muçarela (reserve um pouco para o preenchimento das batatas), o bacon e o creme de leite. Misture bem até incorporar todos os ingredientes.',
            'Em um refratário ou forma, coloque as duas batatas e distribua em cada cavidade um pouco de queijo muçarela, a mistura das polpas, bacon frito, mais um pouco de queijo muçarela por cima, bacon e finalize com a cebolinha picada.',
            'Leve ao forno (preaquecido a 230° C) por aproximadamente 20 minutos.' 
          ]
        },
        {
          titulo: 'Massa:',
          descricao: []
        },
        {
          titulo: 'Recheio:',
          descricao: []
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
        }
      ]
    },


    //Esfiha de carne
    {
      id: 15,
      nome: 'Esfiha de carne',
      tipo: 'Salgado',
      categoria: 'Lanche',
      porcoes: 30,
      tempo: 90,
      ingredientes: [
        {
          titulo: '',
          descricao: [
            '1 gema para pincelar',
            'Gergelim torrado ou preto para salpicar'
          ]
        },
        {
          titulo: 'Massa:',
          descricao: [
            '1 colher (sopa) cheia de fermento para pão (granulado)',
            '2 colheres (sopa) cheias de açúcar refinado',
            '1/2 colher (chá) de sal',
            '1/2 xícara de leite morno (100 ml)',
            '1 xícara de água morna (200 ml)',
            '1 ovo',
            '650 ou 700 g de farinha de trigo',
            '1/2 xícara (chá) de óleo (100 ml)'
          ]
        },
        {
          titulo: 'Recheio:',
          descricao: [
            '1/2 kg de carne moída',
            '1 dente de alho picado',
            '1 cebola picada',
            'Sal a gosto',
            'Temperos a gosto',
            '3 tomates picados',
            '1/2 xícara (chá) de azeitonas picadas',
            '1/2 colher (chá) de noz moscada',
            'Salsinha e cebolinha a gosto',
            'Gotas de molho de pimenta'
          ]
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
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
            'Em uma tigela grande e larga coloque o fermento, o açúcar, a água, o leite, o sal e o óleo e misture bem.', 
            'Acrescente metade da farinha de trigo aos poucos e mexa com uma colher de pau ou de plástico.',
            'Adicione o ovo e continue acrescentando a farinha de trigo aos poucos.',
            'Antes de finalizar a farinha, comece a trabalhar a massa com uma das mãos para sentir a textura e ver se precisa do restante da farinha (muita farinha pode deixar a massa dura).',
            'Sove a massa por aproximadamente 5 minutos. Quando ficar maleável e não grudar nas mãos está no ponto correto.',
            'Coloque a tigela dentro de um saco plástico ou feche-a com um filme plástico e deixe descansar por 20 minutos em um local quente que possa favorecer o crescimento da massa.',
            'Após esse período, separe em porções e abra com um rolo.',
            'Corte círculos com uma faca e algo redondo servindo de molde e coloque 1 colher (sopa) do recheio. ',
            'Dobre as bordas da massa até o centro e feche as duas outras extremidades apertando bem.',
            'Despeje as esfihas em uma forma untada com óleo, pincele a gema por cima e salpique o gergelim.',
            'Leve ao forno (preaquecido a 150° C) por 20 minutos e depois mais 10 minutos a 180° ( este tempo é necessário para que as esfihas cresçam e assem por igual).'
          ]
        },
        {
          titulo: 'Recheio:',
          descricao: [
            'Em uma panela, refogue a carne moída com o alho e a cebola.', 
            'Acrescente o sal, temperos de sua preferência e deixe cozinhar, mexendo sempre para evitar pelotas.',
            'Após cozida, escorra caso tenha líquido, acrescente os demais ingredientes, misture bem e reserve.'
          ]
        },
        {
          titulo: 'Cobertura:',
          descricao: []
        },
        {
          titulo: 'Molho:',
          descricao: []
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
