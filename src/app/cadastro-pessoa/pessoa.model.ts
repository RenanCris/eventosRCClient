import { Endereco } from "./endereco.model";

export class Pessoa{
    nome:string;
    cpf:string;
    email:string;
    nascimento:string;
    sexo:string = 'M';
    endereco: Endereco = new Endereco();
}