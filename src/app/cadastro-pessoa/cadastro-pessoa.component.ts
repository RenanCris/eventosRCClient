import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2/dist/sweetalert2.js'
import { Pessoa } from './pessoa.model';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cadastrar(event){
    event.preventDefault();

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
  }

}
