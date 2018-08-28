import { Component, OnInit } from '@angular/core';
import { GeralService } from '../services/service.geral';
import { Evento } from '../cadastro-evento/evento.model';
import { FiltroService } from '../services/service.filtro';
import { CartService } from '../services/service.carrinho';

@Component({
  selector: 'app-quadro-geral-evento',
  templateUrl: './quadro-geral-evento.component.html',
  styleUrls: ['./quadro-geral-evento.component.css']
})
export class QuadroGeralEventoComponent implements OnInit {

  eventos : Array<Evento>;
  eventos_filter : Array<Evento>;
  
  constructor(private service: GeralService
    , private filtro: FiltroService
    , private cartService : CartService
  ) { 
    this.service.ObterEvento().subscribe((dados) => {
       this.eventos = dados;
       this.eventos_filter =  dados;
    })
  }

  addCart(evento)
  {
    this.cartService.addItem(evento);
  }

  ngOnInit() {
    this.filtro._filtroCidade.on('SelectCidade',(d)=>{
      var a = this.eventos_filter;

      this.eventos = a.filter((eleme)=>{
         return (eleme.cidade == d) || (d == '');
      });
      
    })

    this.filtro._tipo_evento.on('SelectEvento',(d)=>{
      var a = this.eventos_filter;

      this.eventos = a.filter((eleme)=>{
         return (eleme.tipoEvento == d) || (d == '');
      });
      
    })
  }

}
