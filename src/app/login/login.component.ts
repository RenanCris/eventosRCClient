import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AutorizacaoService } from '../services/service.token';
import { Login } from './login.model';
import { Router } from '@angular/router';

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
      localStorage.setItem("token",dados.access_token);
      this.router.navigate(['/principal', {outlets: {'pri':'inicial'}}]); 
    })
  }

}
