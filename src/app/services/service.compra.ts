import {Injectable} from '@angular/core'
import { map } from 'rxjs/operators';
import { Item } from '../carrinho/item.model';
import { CompraCartao } from '../cartao/compra.cartao.module';
import { Http, Headers } from '@angular/http';
import { Constantes } from '../const';
import { AutorizacaoService } from './service.token';

@Injectable()
export class CompraService {
    
    private http: Http;
    private header: Headers;
    private server : Constantes = new Constantes();

    constructor(_http: Http, private service: AutorizacaoService){
        this.http = _http;
        this.header = new Headers();
        this.header.append('Content-Type','application/json');
    }

    finalizarCompra(compra:CompraCartao){
        this.header.append('Authorization','bearer ' + localStorage.getItem('token'))
        return this.http.post(this.server.getServer() + "/compra/v1/comprar", compra,{headers: this.header}).pipe(
            map(res => res.json())
        );
    }

   getCompras(){
        this.header.append('Authorization','bearer ' + localStorage.getItem('token'))
        return this.http.get(this.server.getServer() + "/compra/v1/get", {headers: this.header}).pipe(
            map(res => res.json())
        );
    }
}