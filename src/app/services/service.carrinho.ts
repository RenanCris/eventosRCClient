import {Injectable} from '@angular/core'
import { map } from 'rxjs/operators';
import { Item } from '../carrinho/item.model';

@Injectable()
export class CartService {

    constructor(){}

    items: Item[] = []

    addItem(item:Item){
        this.items.push(item)
        sessionStorage.setItem("cart",JSON.stringify(this.items))
    }

    getItens(): Item[]{
        return JSON.parse(sessionStorage.getItem("cart"))
    }

    removeItem(item){
        this.items.splice(this.items.indexOf(item), 1)
        sessionStorage.setItem("cart",JSON.stringify(this.items))   
    }

    quantidade():number{
        return this.items.length
    }
    
    total() :number{
        return this.items
        .map(item => item.valor)
        .reduce((prev, value)=> prev+value, 0)
    }
    totalIns():number{
        return 0
    }

    installment():number{
        return 0;
    }
}