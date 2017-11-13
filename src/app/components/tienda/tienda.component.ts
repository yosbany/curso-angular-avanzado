import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  title = 'Tienda';

  constructor() { }

  ngOnInit() {
    console.log('TIENDA CARGADO');
    $('#textojq').hide();
    $('#botonjq').click(function () {
      $('#textojq').slideToggle();
    });
    $('#caja').dotdotdot({});
  }

  textoRichEditor(content){
    console.log(content);
  }

}
