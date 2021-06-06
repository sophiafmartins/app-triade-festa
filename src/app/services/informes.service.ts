import { Injectable } from '@angular/core';


export interface Informe {
  id: number,
  nome: string,
  descricao: string[]
}



@Injectable({
  providedIn: 'root'
})
export class InformesService {

  public informes: Informe[] = [
    //Informe 1
    {
      id: 1,
      nome: 'Prepare a sua festa',
      descricao: [
        'Está chegando o aniversário de alguém e quer preparar uma festa?Confira a lista abaixo com itens importantes:',
        'Semanas antes da festa:',
        '1- Escolha o tema',
        '2- Escolha a data, o horário e o local',
        '3- Defina o orçamento',
        '4- Crie uma lista de convidados',
        '5- Crie ou compre os convites',
        '6- Defina um cronograma',
        '7- Faça uma lista com as comidas que terão na festa',
        '8- Defina as lembrancinhas',
        '9- Organize a decoração da festa',
        '10- Monte a playlist',
        '11- Compre as bebidas',

        'No dia da festa:',
        '1- Limpe e decore o local',
        '2- Compre gelo para as bebidas',
        '3- Encha os balões',
        '4- Defina o local para os presentes',
        '5- Monte a mesa dos parabéns'
      ]
    },


    //Informe 2
    {
      id: 2,
      nome: 'Dicas para economizar na festa',
      descricao: [
        'Está chegando alguma comemoração e o orçamento está curto? Confira dicas para economizar na montagem.',
        '1- Considere fazer a festa em casa ou no salão de festas do prédio, por exemplo. Além de montar o espaço da forma como desejar, sairá mais barato do que alugar um salão ou buffet.',

        '2- Monte a lista de convidados com antecedência e pense bem sobre quem deseja convidar. Quanto mais convidados e pessoas de última hora, mais comida será necessário, aumentando o gasto.',

        '3- Hoje há muitas opções de convites virtuais, além de ser possível enviar por aplicativo de mensagens, reduzirá os gastos, evitará desperdício e é uma forma mais ecológica.',

        '4- Monte uma lista com as comidas que haverá na festa e pesquise os ingredientes em lojas de atacado. Alguns itens, como bebidas, descartáveis, guardanapo e materiais para decoração podem ser compradas com antecedência ou em grande quantidade.',

        '5- Pesquise as receitas no Host Cheff e salve nos seus favoritos. Além de ser possível calcular o quanto terá que multiplicar da receita, facilita na hora de separar quais ingredientes comprar.',

        '6- Organize o espaço de modo que tenha um local no qual os convidados podem se servir à vontade. Um exemplo seria uma mesa com bebidas e algumas guloseimas.',

        '7- Seja criativo na decoração e aproveite itens recicláveis (garrafas de vidro, latas, caixas de papelão...).  Materiais simples do dia a dia podem colaborar com a decoração, como murais de fotos, vasos, cata-ventos, pelúcias etc.',

        '8- Para economizar nas lembrancinhas utilize papel colorido, garrafinhas ou potinhos para encher de balas ou doces. Outra opção é comprar os itens em lojas de atacado, pois sai mais barato.',

        '9- Ao terminar a festa, guarde os descartáveis que sobraram, eles podem ser reutilizados na próxima festa.',

        '10- Os itens de decoração também podem ser reaproveitados ou mesmo vendidos em sites de itens usados.'
     ]
    },


    //Informe 3
    {
      id: 3,
      nome: 'Bolo cenográfico',
      descricao: [
        'Faça um bolo cenográfico, além de deixar a mesa bonita, economizará no bolo decorado. Existem diversos tutoriais na internet, mas geralmente a estrutura é de isopor com EVA ou biscuit. O bolo verdadeiro pode ser de chocolate, frutas, gelado de coco ou qualquer outro sabor que preferir. Confira as receitas disponíveis no app.'
     ]
    },


    //Informe 4
    {
      id: 4,
      nome: 'Convites',
      descricao: [
        'Os convites virtuais estão na moda, são fáceis de montar, podem ser enviados por aplicativo de mensagens e há até sites que disponibilizam diversos modelos gratuitos. Mas se preferir, ao invés de comprar pronto, monte seu próprio convite com itens recicláveis e personalize conforme o tema escolhido.'
     ]
    },


    //Informe 5
    {
      id: 5,
      nome: 'Decoração simples',
      descricao: [
        'Uma decoração simples pode encantar tanto quanto uma mais complexa. Você pode aproveitar materiais básicos vendidos em lojas de festa ou papelarias, como: vela, purpurina, confete, pisca-pisca, papel metálico, tecido, itens para pendurar e até mesmo caixa.  Não precisa nem que a mesa seja grande, o que vale mesmo é a criatividade.', 

        'As velas, por exemplo, dão um ar de sofisticação, ainda mais acompanhadas com o dourado e o preto.  Pouco enfeite, mas bem montado pode fazer a diferença na decoração.'
     ]
    },


    //Informe 6
    {
      id: 6,
      nome: 'Aproveite os balões',
      descricao: [
        'Os balões podem ser o curinga da decoração. Abuse das cores, formatos e esculturas. Mesmo a festa acontecendo dentro de casa, uma boa decoração pode ter grandes resultados.  Use a criatividade e aproveite diversos adereços para completar a decoração (painel com o personagem, papeis coloridos para completar o cenário, pelúcia, brinquedos etc.).', 

        'Itens simples como dobradura, pompom de papel de seda, cata-vento e muitos outros itens que são fáceis de montar podem completar a decoração do ambiente.' 
     ]
    },


    //Informe 7
    {
      id: 7,
      nome: 'Decoração nos doces',
      descricao: [
        'Para ajudar a enfeitar a mesa do bolo, aposte em decorações nos docinhos, além de ser fácil de montar deixará a mesa mais encantadora.', 

        'Pegue brigadeiro, beijinho e doce de pé, por exemplo, coloque-os em caixinhas que combinem com a decoração da festa e utilize enfeites. Bombom, pirulito e bala são itens baratos e que também podem ser aproveitados na mesa.'
     ]
    },

    //Informe 8
    {
      id: 8,
      nome: 'Espaço para se servir à vontade',
      descricao: [
        'Reserve um espaço para colocar bebidas, salgadinhos ou guloseimas, de modo que os convidados possam se servir à vontade. Você pode utilizar frutas e flores na decoração.'
     ]
    },


    //Informe 9
    {
      id: 9,
      nome: 'Lembrancinha fácil e barata',
      descricao: [
        'Aproveite itens para decorar o local e servir de presente aos convidados. Potes, garrafas e vasos podem servir de decoração nas mesas e ao mesmo tempo lembrancinha.', 

        'Reaproveite latas ou garrafas e encha de flores, é simples e delicado, mas que fazem toda a diferença e os arranjos deixam o local encantador.'
     ]
    },


    //Informe 10
    {
      id: 10,
      nome: 'Lembrancinha gastando pouco',
      descricao: [
        'Para economizar nas lembrancinhas abuse da criatividade. Utilize saco de papel/plástico, papel colorido, EVA, garrafinhas e até mesmo potinhos para encher de balas ou doces. Outra opção é fazer saquinhos com pipoca, docinhos e brinquedos. Ao comprar, dê preferência por lojas que vendem por atacado, pois sairá mais barato.',

        'Com papel, EVA, fita, TNT, lantejoula e glitter é possível fazer uma linda lembrancinha.'
     ]
    },


    //Informe 11
    {
      id: 11,
      nome: 'Decore gastando pouco',
      descricao: [
        'Mesmo com um orçamento apertado é possível fazer uma decoração bonita, o que conta nesse momento é a criatividade. O bolo pode até ser simples, mas cada detalhe pode se transformar em algo incrível.',

        'Após escolher o tema, pense em quais itens pode utilizar para decorar o ambiente e, se não tiver uma toalha de mesa que combine, abuse das folhas, flores, frutas, elas podem dar um charme à mesa do bolo. Na parede utilize balões, além de serem baratos, eles se destacam no fundo e dão um toque colorido. Usando a criatividade você consegue fazer uma decoração simples e surpreendente.'
     ]
    },


    //Informe 12
    {
      id: 12,
      nome: 'Aproveite o chocolate',
      descricao: [
        'Quem resiste a um chocolate? Aproveite a iguaria para decorar a mesa do bolo. Faça pirulitos personalizados com o tema, utilize bombons e até mesmo outros doces na decoração. Eles podem até ser utilizados como lembrancinha.'
     ]
    },

    //Informe 13
    {
      id: 13,
      nome: 'Mural de fotos',
      descricao: [
        'Já pensou em fazer um mural de fotos? Além de ser simples, deixará a festa mais linda, charmosa e com um toque de nostalgia e boas recordações.  A quantidade de fotos não importa, o que vale é a criatividade: pode ser utilizado um varal na parede ou diversos porta-retratos dispostos na mesa do bolo, na de docinhos ou mesmo na de lembrancinhas. '
     ]
    }
   ]


  constructor() { }

  public getInformeById(id:number){
    return{...this.informes.find(i => i.id===id)}
  }
}
