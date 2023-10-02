import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatorioComponent } from './core/relatorio/relatorio.component';
import { PontoComponent } from './core/ponto/ponto.component';
import { PerfilComponent } from './core/perfil/perfil.component';
import { LoginComponent } from './core/auth/login/login.component';
import { UsuarioNaoAutenticadoGuard } from './shared/guard/usuario-nao-autenticado.guard';
import { UsuarioAutenticadoGuard } from './shared/guard/usuario-autenticado.guard';
import { PrincipalComponent } from './core/principal/principal.component';

const routes: Routes = [
  {
    path: '', component: PrincipalComponent, canActivate: [UsuarioAutenticadoGuard],
    children: [
      { path: '', component: PontoComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'relatorio', component: RelatorioComponent },
    ]
  },
  { path: 'login', component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
