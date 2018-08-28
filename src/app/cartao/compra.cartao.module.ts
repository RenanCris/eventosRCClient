import { Evento } from "../cadastro-evento/evento.model";
import { Pessoa } from "../cadastro-pessoa/pessoa.model";
import { Cartao } from "./cartao.model";

export class CompraCartao{
    eventos : Array<Evento>;
    valorTotal:number;
    cpf: string
    numero: number;
    cvv:number;

    constructor() {
            
    }

}