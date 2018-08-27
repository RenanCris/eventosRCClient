import { Component, OnInit } from '@angular/core';
import { GeralService } from '../services/service.geral';
import { Cidade } from '../cadastro-cidade/cidade.model';
import {interval} from "rxjs";
import { Evento } from '../cadastro-evento/evento.model';
declare var $: any;

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  cidades : Array<Cidade>;

  constructor(private service: GeralService) { 
    this.service.ObterCidades().subscribe((dados) =>{
      this.cidades = dados;
    })
  }

  ngOnInit() {
    $(function(){
      interval(1000).subscribe(()=>{
        $('.chosen-select').chosen({ width: "100%" });
      })
    }); 
  }
}
