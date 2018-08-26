import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  pessoa: Object = {
    nome:'',
    cpf:'',
    email:'',
    nascimento:'',
    sexo:'M',
    endereco:{
      cep:'',
      rua:'',
      numero:'',
      bairro:'',
      cidade:'',
      estado:''
    }
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cadastrar(event){
    event.preventDefault();
    this.router.navigate(['/secundario', {outlets: {'sec':'login'}}]); 
  }

}
