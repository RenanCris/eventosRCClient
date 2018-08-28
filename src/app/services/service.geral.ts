import {Http, Headers} from '@angular/http';
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { AutorizacaoService } from './service.token';
import { Evento } from '../cadastro-evento/evento.model';
import { Constantes } from '../const';
import { Pessoa } from '../cadastro-pessoa/pessoa.model';
import { Cidade } from '../cadastro-cidade/cidade.model';

@Injectable()
export class GeralService {

    private http: Http;
    private header: Headers;
    private server : Constantes = new Constantes();

    constructor(_http: Http, private service: AutorizacaoService){
        this.http = _http;
        this.header = new Headers();
        this.header.append('Content-Type','application/json');
    }

    CadastrarEvento(evento : Evento) {
        this.header.append('Authorization','bearer ' + localStorage.getItem('token'))
        return this.http.post(this.server.getServer() + "/evento/v1/create", evento,{headers: this.header}).pipe(
            map(res => res.json())
        );
    }

    ObterEvento(){
        return this.http.get(this.server.getServer() + "/evento/v1/get", {headers: this.header}).pipe(
            map(res => res.json())
        );
    }

    ObterTotalEventos(){
        return this.http.get(this.server.getServer() + "/evento/v1/count", {headers: this.header}).pipe(
            map(res => res.json())
        );
    }

    CadastrarPessoa(pessoa : Pessoa) {
        return this.http.post(this.server.getServer() + "/pessoa/v1/create", pessoa,{headers: this.header}).pipe(
            map(res => res.json())
        );
    }

    CadastrarCidade(cidade : Cidade) {
        this.header.append('Authorization','bearer ' + localStorage.getItem('token'))
        return this.http.post(this.server.getServer() + "/cidade/v1/create", cidade,{headers: this.header}).pipe(
            map(res => res.json())
        );
    }

    ObterCidades(){
        return this.http.get(this.server.getServer() + "/cidade/v1/get", {headers: this.header}).pipe(
            map(res => res.json())
        );
    }

    ObterImagensEventos(descricao){
        return descricao == "Esporte" ? "esporte" : descricao == "Show" ? "festa" : "teatro"
    }
}

