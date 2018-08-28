import { Component, OnInit } from '@angular/core';
import { GeralService } from '../services/service.geral';
import { Evento } from '../cadastro-evento/evento.model';
import {interval} from "rxjs";
import { CartService } from '../services/service.carrinho';
import { Item } from '../carrinho/item.model';
import { FiltroService } from '../services/service.filtro';
declare var  $: any;

@Component({
  selector: 'app-lista-evento',
  templateUrl: './lista-evento.component.html',
  styleUrls: ['./lista-evento.component.css']
})
export class ListaEventoComponent implements OnInit {

  eventos : Array<Evento>;

  constructor(private service: GeralService, private filtro: FiltroService) { 
    this.service.ObterEvento().subscribe((dados) => {
      
       this.eventos = dados.map((eleme)=>{
          eleme.img = this.ObterFiguras(eleme.tipoEvento)
          return eleme;
       });
       
       interval(100).subscribe(() =>{
        $('.slick').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true
        });
      })
    })
  }

  private ObterFiguras(descricao){
    return this.service.ObterImagensEventos(descricao);
  }

  ngOnInit() {
  }
}
