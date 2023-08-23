import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatorioComponent } from './core/relatorio/relatorio.component';
import { PontoComponent } from './core/ponto/ponto.component';
import { PerfilComponent } from './core/perfil/perfil.component';

const routes: Routes = [
  {path: '', component: PontoComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'relatorio', component: RelatorioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
