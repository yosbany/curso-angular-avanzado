import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'Contacto';
  emailContancto: string;

  constructor() { }

  ngOnInit() {
    console.log('CONTACTO CARGADO');
  }

  // tslint:disable-next-line:one-line
  guardarEmail(){
    localStorage.setItem('emailContacto', this.emailContancto);
    console.log(localStorage.getItem('emailContacto'));
  }

}
