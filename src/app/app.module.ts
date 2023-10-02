import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './core/perfil/perfil.component';
import { PontoComponent } from './core/ponto/ponto.component';
import { RelatorioComponent } from './core/relatorio/relatorio.component';
import { RelogioComponent } from './core/ponto/relogio/relogio.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { CoreComponent } from './core/core.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    PontoComponent,
    RelatorioComponent,
    RelogioComponent,
    LoginComponent,
    CoreComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
