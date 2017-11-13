import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component';
import { MailEmailComponent } from './components/main-email/main-email.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    GuardarEmailComponent,
    MostrarEmailComponent,
    MailEmailComponent
  ],
  exports: [MailEmailComponent]
})
export class ModuloEmailModule { }
