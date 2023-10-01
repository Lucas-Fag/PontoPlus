import { Component } from '@angular/core';

@Component({
  selector: 'app-ponto',
  templateUrl: './ponto.component.html',
  styleUrls: ['./ponto.component.scss']
})
export class PontoComponent {
  protected observacao: string = "";

  public registrarPonto(): void {
    console.log(`Registrar ponto: ${this.observacao}`);
  }


}
