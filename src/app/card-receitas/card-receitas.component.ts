import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-receitas',
  templateUrl: './card-receitas.component.html',
  styleUrls: ['./card-receitas.component.scss'],
})
export class CardReceitasComponent implements OnInit {

  @Input() receita;

  constructor() { }

  ngOnInit() {}

}
