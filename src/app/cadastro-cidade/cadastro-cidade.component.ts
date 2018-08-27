import { Component, OnInit } from '@angular/core';
import { Cidade } from './cidade.model';
import { GeralService } from '../services/service.geral';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-cadastro-cidade',
  templateUrl: './cadastro-cidade.component.html',
  styleUrls: ['./cadastro-cidade.component.css']
})
export class CadastroCidadeComponent implements OnInit {

  cidade : Cidade = new Cidade();
  cidades : Array<Cidade>;

  constructor(private service: GeralService) { 
    this.service.ObterCidades().subscribe((dados) =>{
      this.cidades = dados;
    })
  }

  ngOnInit() {
  }

  cadastrar(){
    this.service.CadastrarCidade(this.cidade).subscribe((dados) => {
      this.cidades.push(this.cidade);
    })
  }

}
