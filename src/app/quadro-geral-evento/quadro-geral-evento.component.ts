import { Component, OnInit } from '@angular/core';
import { GeralService } from '../services/service.geral';
import { Evento } from '../cadastro-evento/evento.model';

@Component({
  selector: 'app-quadro-geral-evento',
  templateUrl: './quadro-geral-evento.component.html',
  styleUrls: ['./quadro-geral-evento.component.css']
})
export class QuadroGeralEventoComponent implements OnInit {

  eventos : Array<Evento>;
  
  constructor(private service: GeralService) { 
    this.service.ObterEvento().subscribe((dados) => {
       this.eventos = dados; 
    })
  }

  ngOnInit() {
  }

}
