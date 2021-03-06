import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componets
import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home',  pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'animales', component: AnimalsComponent },
    { path: 'contacto', component: ContactComponent },
    { path: 'cuidadores', component: KeepersComponent },
    { path: 'tienda', component: TiendaComponent },
    { path: '**', component: HomeComponent }

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
