import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Informe, InformesService} from '../services/informes.service';


@Component({
  selector: 'app-informes',
  templateUrl: './informes.page.html',
  styleUrls: ['./informes.page.scss'],
})
export class InformesPage implements OnInit {
  public informe: Informe;

  public informeId: number;

  constructor(private route: ActivatedRoute, private informeService: InformesService) { 
    this.informeId = +route.snapshot.paramMap.get("id");
    this.informe = informeService.getInformeById(this.informeId);
  }

  ngOnInit() {
  }

}
