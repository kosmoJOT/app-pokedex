import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalWindowComponent } from './components/principal-window/principal-window.component';

const routes: Routes = [
  {path: 'pokedex', component: PrincipalWindowComponent},
  {path: '', redirectTo: 'pokedex', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
