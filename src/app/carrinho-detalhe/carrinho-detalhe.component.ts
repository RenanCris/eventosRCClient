import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/service.carrinho';
import { Item } from '../carrinho/item.model';
import { GeralService } from '../services/service.geral';

@Component({
  selector: 'app-carrinho-detalhe',
  templateUrl: './carrinho-detalhe.component.html',
  styleUrls: ['./carrinho-detalhe.component.css']
})
export class CarrinhoDetalheComponent implements OnInit {

  itens: Item[] = []

  constructor(private cartService : CartService, private service:GeralService) { 
    let cartSession = sessionStorage.getItem("cart");
    
    
    this.getTodos(cartSession);
  }

  total(): number{
    return this.cartService.quantidade();
  }

  totalValor():number{
    return this.cartService.total();
  }

  getTodos(cartSession){
    if(cartSession != null){
      this.itens = JSON.parse(cartSession);
    }
  }

  getImg(tipo){
    return this.service.ObterImagensEventos(tipo)
  }

  ngOnInit() {
    
  }

}
