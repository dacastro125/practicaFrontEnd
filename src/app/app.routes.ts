import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component'; // <-- Nombre corregido
import { ReflectionComponent } from './reflection/reflection.component';
import { HealingComponent } from './healing/healing.component';

export const routes: Routes = [
  // Redirige la ruta vacía a /inicio
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, 
  
  // Define las rutas para cada componente
  { path: 'inicio', component: InicioComponent },
  { path: 'reflexion', component: ReflectionComponent },
  { path: 'sanar', component: HealingComponent }
];