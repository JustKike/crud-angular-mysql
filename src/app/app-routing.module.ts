import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/listar', pathMatch: 'full' },
  { path: 'listar', component: ListarComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '**', redirectTo: 'listar' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
