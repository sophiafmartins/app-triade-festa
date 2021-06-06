import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-informes',
  templateUrl: './card-informes.component.html',
  styleUrls: ['./card-informes.component.scss'],
})
export class CardInformesComponent implements OnInit {

  @Input() informe;

  constructor() { }

  ngOnInit() {}

}
