import { Component } from '@angular/core';
import { PontoService } from 'src/app/shared/service/ponto.service';

@Component({
  selector: 'app-ponto',
  templateUrl: './ponto.component.html',
  styleUrls: ['./ponto.component.scss']
})
export class PontoComponent {
  protected observacao: string = "";

  constructor (private pontoService: PontoService) { }

  public registrarPonto(): void {
    this.pontoService.registrarPonto(this.observacao);
    this.observacao = "";
  }


}
