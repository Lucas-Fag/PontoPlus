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

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    PontoComponent,
    RelatorioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
