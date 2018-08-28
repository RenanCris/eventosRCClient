import { EventEmitter } from "events";
import { Cidade } from "../cadastro-cidade/cidade.model";

export class FiltroService {
    public _filtroCidade : EventEmitter;
    public _tipo_evento  : EventEmitter;

    constructor() {
        this._filtroCidade = new EventEmitter();
        this._tipo_evento = new EventEmitter();
    }


    public filtroCidade(cidade: string): void {
        this._filtroCidade.emit('SelectCidade',cidade);
    }

    public filtroEvento(evento: string): void {
        this._tipo_evento.emit('SelectEvento',evento);
    }
}