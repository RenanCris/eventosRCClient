import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/service.carrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(private cartService : CartService) { }

  ngOnInit() {
    //sessionStorage.removeItem("cart")
    let cartSession = sessionStorage.getItem("cart");
    //carrinho não está vazio
    if(cartSession != null){
      this.cartService.items = JSON.parse(cartSession);
    }
  }

  quantidade() :number{
    return this.cartService.quantidade()
  }

  total() :number{
    return this.cartService.total()
  }

  totalIns() :number{
    return this.cartService.totalIns()
  }

  installments(){
    return this.cartService.installment()
  }
  

}
