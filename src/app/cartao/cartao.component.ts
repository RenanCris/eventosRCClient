import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/service.carrinho';
import { Cartao } from './cartao.model';
import { CompraCartao } from './compra.cartao.module';
import { Usuario } from '../usuario/usuario.model';
import { CompraService } from '../services/service.compra';
import swal from 'sweetalert2/dist/sweetalert2.js'
import { AutorizacaoService } from '../services/service.token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CompraCartaoComponent implements OnInit {

  cartao : Cartao = new Cartao();

  constructor(private cartService : CartService, private compraService: CompraService
    , private authServer: AutorizacaoService,private router: Router) { }

  totalValor():number{
    return this.cartService.total();
  }

  realizarCompra(){
    let compra = new CompraCartao();
    compra.valorTotal = Math.round(this.cartService.total() * 100) / 100 ;
    compra.cpf = Usuario.getCpf();
    compra.eventos = this.cartService.getItens();
    compra.numero = this.cartao.numero;
    compra.cvv = this.cartao.cvv;

    var msg = swal({
      type: 'warning',
      title: 'Aguarde o processamento...',
      text: '',
      showConfirmButton: false,
      allowOutsideClick : false
    })

    this.compraService.finalizarCompra(compra).subscribe(()=>{
      swal.close();

      const toast = swal({
        type: 'success',
        title: 'Confirmado...',
        text: 'Compra Realizada!',
        showConfirmButton: false,
        timer: 2000,
        allowOutsideClick : false
      }).then((result) => {
        this.reset();
      })
    }, (err) =>{
        const toast = swal({
          type: 'error',
          title: 'Ops...',
          text: err._body,
          showConfirmButton: false,
          timer: 3000,
          allowOutsideClick : true
        })
    })
  }

  cancelar(){
    this.reset();
  }

  ngOnInit() {
    if(!this.authServer.isLogado()){
      swal({
        type: 'warning',
        title: 'Validação...',
        text: 'Você não está logado!',
        showConfirmButton: false,
        timer: 2000,
        allowOutsideClick : false
      }).then((result) => {
        this.router.navigate(['/principal', {outlets: {'pri':'inicial'}}]);
      })
    }
  }

  private reset():void{
    sessionStorage.removeItem(AutorizacaoService.CART);
    this.router.navigate(['/principal', {outlets: {'pri':'inicial'}}]);
    window.location.reload();
  }

}
