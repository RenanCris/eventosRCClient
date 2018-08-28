import { Component, OnInit } from '@angular/core';
import { GeralService } from '../services/service.geral';

@Component({
  selector: 'app-painel-logo',
  templateUrl: 'painel-logo.component.html',
  styleUrls: ['painel-logo.component.css']
})
export class PainelLogoComponent implements OnInit {

  totalEventos : number;

  constructor(private service: GeralService) { 

    this.service.ObterTotalEventos().subscribe((dados) =>{
      this.totalEventos = dados;
    })
  }

  ngOnInit() {
  }

}
