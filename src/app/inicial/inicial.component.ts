import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      
        $('.chosen-select').chosen({ width: "100%" });

        $('.slick').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true
        });
    });
  }

}
