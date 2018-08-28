import { Component, OnInit } from '@angular/core';
import { CompraService } from '../services/service.compra';

@Component({
  selector: 'app-minhas-compras',
  templateUrl: './minhas-compras.component.html',
  styleUrls: ['./minhas-compras.component.css']
})
export class MinhasComprasComponent implements OnInit {

  compras : Array<any>  
  constructor(private comprasService: CompraService) { 
    this.comprasService.getCompras().subscribe((dados)=>{
      this.compras = dados;
    })
  }

  ngOnInit() {
  }

}
