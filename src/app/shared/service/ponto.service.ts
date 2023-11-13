import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PontoService {

  private pontosRegistrados: Array<RegistroPonto> = [];

  constructor() { }

  public registrarPonto(observacao: string) {
    let data: Date = new Date();
    let tipo: TipoPonto = TipoPonto.ENTRADA;
    
    if (this.pontosRegistrados.length > 0) {
      
      if (this.pontosRegistrados[this.pontosRegistrados.length - 1].tipo === TipoPonto.ENTRADA)  {
        tipo = TipoPonto.SAIDA;
      }
    }

    this.pontosRegistrados.push({data: data, tipo: tipo, observacao: observacao});
  }

  public getPontos(page: number, pageSize: number): Relatorio {
    let inicio: number = (page-1) * pageSize;
    let fim: number = page * pageSize;
    let regsReturn: Array<RegistroPonto> = this.pontosRegistrados.slice(inicio, fim);
    let hasNext: boolean = this.pontosRegistrados.length-1 > fim;
    let pontos: Array<RelatorioItem> = [];

    regsReturn.forEach( (registro: RegistroPonto) => {
      let hora: string = registro.data.toLocaleTimeString();
      let tipo: TipoPonto = registro.tipo;
      let observacao: string = registro.observacao;
      let data: Date = registro.data;
      let status: StatusPonto = StatusPonto.COMPLETO;
      let acoes: Array<string> = ["edit"]

      pontos.push({
        hora: hora,
        tipo: tipo,
        observacao: observacao,
        data: data,
        status: status,
        acoes: acoes,
      })
    });

    return {pontos: pontos, hasNext: hasNext};
  }

}

interface RegistroPonto {
  data: Date;
  tipo: TipoPonto;
  observacao: string;
}

enum TipoPonto {
  ENTRADA = "E",
  SAIDA = "S"
}

export interface Relatorio {
  pontos: Array<RelatorioItem>,
  hasNext: boolean;
}

enum StatusPonto {
  COMPLETO = "C",
  INCOMPLETO = "I"
}

interface RelatorioItem {
  hora: string;
  tipo: TipoPonto;
  observacao: string;
  data: Date;
  status: StatusPonto;
  acoes: Array<string>;
}

