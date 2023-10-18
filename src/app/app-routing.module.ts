import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatorioComponent } from './core/relatorio/relatorio.component';
import { PontoComponent } from './core/ponto/ponto.component';
import { PerfilComponent } from './core/perfil/perfil.component';
import { LoginComponent } from './auth/login/login.component';
import { UsuarioNaoAutenticadoGuard } from './shared/guard/usuario-nao-autenticado.guard';
import { UsuarioAutenticadoGuard } from './shared/guard/usuario-autenticado.guard';
import { CoreComponent } from './core/core.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: '', component: CoreComponent, canActivate: [UsuarioAutenticadoGuard],
    children: [
      { path: '', component: PontoComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'relatorio', component: RelatorioComponent },
    ]
  },
  { path: 'login', component: LoginComponent, canActivate: [UsuarioNaoAutenticadoGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [UsuarioNaoAutenticadoGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
