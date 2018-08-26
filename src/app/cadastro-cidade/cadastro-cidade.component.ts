import { Component, OnInit } from '@angular/core';
import { Cidade } from './cidade.model';

@Component({
  selector: 'app-cadastro-cidade',
  templateUrl: './cadastro-cidade.component.html',
  styleUrls: ['./cadastro-cidade.component.css']
})
export class CadastroCidadeComponent implements OnInit {

  cidade : Cidade = new Cidade();

  constructor() { }

  ngOnInit() {
  }

}
