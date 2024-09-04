import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: "", pathMatch: 'full', component: HomeComponent}
];
