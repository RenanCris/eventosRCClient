import {Http, Headers} from '@angular/http';
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Login } from '../login/login.model';
import { Constantes } from '../const';

@Injectable()
export class AutorizacaoService {

    private http: Http;
    private header: Headers;

    constructor(_http: Http){
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
        return localStorage.getItem("token");
    }
}
