import { Routes } from '@angular/router';
import { AddPageComponent } from './add-page/add-page.component';
import { CanchaComponent } from './cancha/cancha.component';
 
export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'agregar-cancha', component: AddPageComponent },
    { path: 'inicio', component: CanchaComponent }
];