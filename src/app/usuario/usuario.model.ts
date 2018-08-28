import { AutorizacaoService } from "../services/service.token";

export class Usuario {
    nome:string;
    email:string;
    perfil:string;
    cpf:string;

    static getCpf(): string{
        return localStorage.getItem(AutorizacaoService.CPF);
    }

    static getNome(): string{
        return localStorage.getItem(AutorizacaoService.NOME);
    }

    static getPerfil(): string{
        return localStorage.getItem(AutorizacaoService.PERFIL);
    }
    static getEmail(): string{
        return localStorage.getItem(AutorizacaoService.EMAIL);
    }
}