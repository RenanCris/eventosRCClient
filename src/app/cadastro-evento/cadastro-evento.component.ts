import { Component, OnInit } from '@angular/core';
import { Evento } from './evento.model';
import { GeralService } from '../services/service.geral';
import {interval} from "rxjs";
import { Cidade } from '../cadastro-cidade/cidade.model';
import swal from 'sweetalert2/dist/sweetalert2.js'
declare var $ : any;

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.css']
})
export class CadastroEventoComponent implements OnInit {

  evento : Evento = new Evento();
  eventos: Array<Evento>;
  cidades: Array<Cidade>;

  constructor(private service: GeralService) { 
   this.service.ObterEvento().subscribe((dados) => {
      this.eventos = dados;
   })

   this.service.ObterCidades().subscribe((dados) => {
    this.cidades = dados;
 })
  }

  ngOnInit() {
  }

  cadastrar(){
    this.service.CadastrarEvento(this.evento).subscribe((dados) => {
      this.eventos.push(this.evento);

      const toast = swal({
        type: 'success',
        title: 'Confirmado...',
        text: 'Cadastro Realizado!',
        showConfirmButton: false,
        timer: 1000,
        allowOutsideClick : true
      }, (err) =>{
        const toast = swal({
          type: 'error',
          title: 'Ops...',
          text: err._body,
          showConfirmButton: false,
          timer: 3000,
          allowOutsideClick : true
        })
    })

    })
  }

}
