import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//rutas
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component'


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'productos', component: ProductosComponent }
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
