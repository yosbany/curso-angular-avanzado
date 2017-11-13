import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guardar-email',
  template: `
    <h4>{{title}}</h4>
    <input type="text" [(ngModel)]="emailContancto" />
    <button (click)="guardarEmail()">Guardar Email</button>
  `
})
export class GuardarEmailComponent implements OnInit {
  title = 'Guardar Email';
  emailContacto: string;
  constructor () { }
  ngOnInit() {
    console.log('Componennte GuardarEmailComponent');
  }
  guardarEmail() {
    console.log(this.emailContacto);
    localStorage.setItem('emailContacto', this.emailContacto);
    console.log(localStorage.getItem('emailContacto'));
  }
}
