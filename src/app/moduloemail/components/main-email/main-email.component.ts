import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-email',
  template: `
    <div class="panel panel-dafault">
      <h2>{{title}}</h2>
      <hr/>
      <app-mostrar-email></app-mostrar-email>
      <app-guardar-email></app-guardar-email>
    </div>
  `
})
export class MailEmailComponent implements OnInit, DoCheck {
  title = 'Modulo de Email';
  ngOnInit() {
    console.log('Modulo de email cargado');
  }
  ngDoCheck() {}
}
