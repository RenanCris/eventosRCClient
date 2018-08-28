import { Component, OnInit } from '@angular/core';
import { AutorizacaoService } from '../services/service.token';
import { Usuario } from '../usuario/usuario.model';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent implements OnInit {

  nome:string
  perfil:string

  constructor(private service: AutorizacaoService) { 
  }

  IsDadosToken() : boolean{
    return !this.service.getToken() 
  }

  EfetuarLogout(){
    this.service.logout();
  }

  IsAdmin(): boolean{
    return this.perfil == "Admin";
  }

  ngOnInit() {
    if(!this.IsDadosToken()){
       this.nome = Usuario.getNome()
       this.perfil = Usuario.getPerfil();
    }
  }

}
