import { Component, OnInit } from '@angular/core';

declare var  $: any;

@Component({
  selector: 'app-lista-evento',
  templateUrl: './lista-evento.component.html',
  styleUrls: ['./lista-evento.component.css']
})
export class ListaEventoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.slick').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true
    });
  }

}
