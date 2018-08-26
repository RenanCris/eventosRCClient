import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      $('.chosen-select').chosen({ width: "100%" });
    }); 
  }

}
