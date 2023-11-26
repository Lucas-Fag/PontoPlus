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
    let pontos: Array<RelatorioItem> = [];

    for (let index = 0; index < this.pontosRegistrados.length; index++) {
      const registro = this.pontosRegistrados[index];
      let hora: string = registro.data.toLocaleTimeString();
      let tipo: TipoPonto = registro.tipo;
      let observacao: string = registro.observacao;
      let data: Date = registro.data;
      let status: StatusPonto = StatusPonto.COMPLETO;
      let acoes: Array<string> = ["edit", "delete"];

      pontos.push({
        hora: hora,
        tipo: tipo,
        observacao: observacao,
        data: data,
        status: status,
        acoes: acoes,
        indice: index
      });

    }

    return {pontos: pontos, hasNext: false};
  }

  public removePonto(indice: number) {

    if (indice < 0 || indice >= this.pontosRegistrados.length) {
      return;
    }
  
    this.pontosRegistrados.splice(indice, 1);
  }

  public alterar(indice: number, dados: RelatorioItem) {
    
    if (indice < 0 || indice >= this.pontosRegistrados.length) {
      return;
    }

    dados.data = new Date(`${dados.data}T${dados.hora}`);
  
    this.pontosRegistrados[indice].data = dados.data;
    this.pontosRegistrados[indice].tipo = dados.tipo;
    this.pontosRegistrados[indice].observacao = dados.observacao;
  }

}

interface RegistroPonto {
  data: Date;
  tipo: TipoPonto;
  observacao: string;
}

export enum TipoPonto {
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

export interface RelatorioItem {
  hora: string;
  tipo: TipoPonto;
  observacao: string;
  data: Date;
  status: StatusPonto;
  acoes: Array<string>;
  indice: number;
}

