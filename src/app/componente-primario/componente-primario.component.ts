import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-componente-primario',
  templateUrl: './componente-primario.component.html',
  styleUrls: ['./componente-primario.component.css']
})
export class ComponentePrimarioComponent implements OnInit {

  constructor(private zone: NgZone) { }

  ngOnInit() {
    
  }

}
