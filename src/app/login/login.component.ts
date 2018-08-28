import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AutorizacaoService } from '../services/service.token';
import { Login } from './login.model';
import { Router } from '@angular/router';
import swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  constructor(private service: AutorizacaoService,private router: Router) { }

  ngOnInit() {
  }

  logar(event){
    event.preventDefault();

    this.service.setToken(this.login).subscribe((dados) => {
      this.GetDadosLocais(dados)
      this.router.navigate(['/principal', {outlets: {'pri':'inicial'}}]); 
    },(e)=>{
      const toast = swal({
        type: 'error',
        title: 'Ops...',
        text: JSON.parse(e._body).error_description,
        showConfirmButton: false,
        timer: 3000,
        allowOutsideClick : true
      })
    })
  }

  private GetDadosLocais(dados){
    localStorage.setItem(AutorizacaoService.TOKEN,dados.access_token);
    localStorage.setItem(AutorizacaoService.NOME,dados.nome);
    localStorage.setItem(AutorizacaoService.EMAIL,dados.email);
    localStorage.setItem(AutorizacaoService.PERFIL,dados.perfil);
    localStorage.setItem(AutorizacaoService.CPF,dados.cpf);
  }

}
