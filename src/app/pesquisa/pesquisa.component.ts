import { Component, OnInit } from '@angular/core';
import { GeralService } from '../services/service.geral';
import { Cidade } from '../cadastro-cidade/cidade.model';
import {interval} from "rxjs";
import { Evento } from '../cadastro-evento/evento.model';
import { EventEmitter } from 'events';
import { FiltroService } from '../services/service.filtro';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  cidades : Array<Cidade>;

  constructor(private service: GeralService, private filtro: FiltroService) { 
    this.service.ObterCidades().subscribe((dados) =>{
      this.cidades = dados;
    })
  }

  consultarCidade = new EventEmitter();

  filtrarCidade(cidade){
    this.filtro.filtroCidade(cidade);
  }

  filtrarEvento(evento){
    this.filtro.filtroEvento(evento);
  }

  ngOnInit() {
   
  }
}
