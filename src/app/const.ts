export class  Constantes {
    private _servidorRemoto: string = "http://localhost:51661/";

    getServer() : string{
        return this._servidorRemoto;
    }
}