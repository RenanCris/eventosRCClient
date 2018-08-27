import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2/dist/sweetalert2.js'
import { Pessoa } from './pessoa.model';
import { GeralService } from '../services/service.geral';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  constructor(private router: Router, private service: GeralService) { 

  }

  ngOnInit() {
  }

  cadastrar(event){
    event.preventDefault();

    this.service.CadastrarPessoa(this.pessoa).subscribe((dados) => {
      const toast = swal({
        type: 'success',
        title: 'Confirmado...',
        text: 'CadastroRealizado!',
        showConfirmButton: false,
        timer: 1000,
        allowOutsideClick : false
      }).then((result) => {
        this.router.navigate(['/secundario', {outlets: {'sec':'login'}}]); 
      })
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
  }
}
