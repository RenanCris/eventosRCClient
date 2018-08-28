import {Http, Headers} from '@angular/http';
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Login } from '../login/login.model';
import { Constantes } from '../const';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

@Injectable()
export class AutorizacaoService {

    private http: Http;
    private header: Headers;
    public static TOKEN: string = "token"
    public static NOME: string = "nome"
    public static EMAIL: string = "email"
    public static PERFIL: string = "perfil"
    public static CART: string = "cart"
    public static CPF: string = "cpf"

    constructor(_http: Http, private router: Router){
        this.http = _http;
        this.header = new Headers();
        this.header.append('Content-Type','application/x-www-form-urlencoded');
    }

    setToken(login:Login) {
        let server = new Constantes();
        var dados = "grant_type=password&username=" + login.cpf + "&password="+ login.senha
         return this.http.post(server.getServer() + "token", dados,{headers: this.header}).pipe(
            map(res => res.json())
        );
    }

    getToken(): any{
        return localStorage.getItem(AutorizacaoService.TOKEN);
    }

    logout(): void{
        localStorage.removeItem(AutorizacaoService.TOKEN);
        localStorage.removeItem(AutorizacaoService.NOME);
        localStorage.removeItem(AutorizacaoService.PERFIL);
        localStorage.removeItem(AutorizacaoService.EMAIL);
        localStorage.removeItem(AutorizacaoService.CPF);
        sessionStorage.removeItem(AutorizacaoService.CART);
        this.router.navigate(['/principal', {outlets: {'pri':'inicial'}}]); 
        window.location.reload();
    }

    isLogado(): boolean{
        return localStorage.getItem(AutorizacaoService.TOKEN) != null;
    }
}
