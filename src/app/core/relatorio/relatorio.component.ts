import { Component, OnInit } from '@angular/core';
import { PoPageAction, PoTableColumn, PoTableColumnSpacing } from '@po-ui/ng-components';
import { PontoService, Relatorio } from 'src/app/shared/service/ponto.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {
  
  constructor(
    private pontoService: PontoService
  ) { }

  protected readonly acoes: Array<PoPageAction> = [
    {label: "Gerar relatório", action: this.gerarRelatorio.bind(this)}
  ];
  
  protected readonly colunas: Array<PoTableColumn> = [
    { property: "hora", label: "Horário", type: "time", format: "HH:mm", width: "8%" },
    {
      property: "tipo", label: "Tipo", width: "2%", type: "subtitle", subtitles: [
        { value: "E", content: "E", label: "Entrada", color: "color-09" },
        { value: "S", content: "S", label: "Saída", color: "color-10" }
      ]
    },
    { property: "observacao", label: "Observação", width: "50%" },
    { property: "data", label: "Data", width: "15%", type: "date" },
    {
      property: "status", label: "Status do dia", width: "20%", type: "label", labels: [
        { value: "C", label: "Completo", color: "color-10" },
        { value: "I", label: "Incompleto", color: "color-07" },
      ]
    },
    {
      property: "acoes", label: "Ações", width: "5%", type: "icon", icons: [
        { value: "edit", icon: 'po-icon-edit', action: this.editar.bind(this) }
      ]
    }
  ];
  
  protected dados: Array<any> = [];
  protected hasNext: boolean = true;
  protected tableHeight: number = 0;
  protected readonly espacamento = PoTableColumnSpacing.Large;
  private page: number = 1;
  private pageSize: number = 10;
  
  ngOnInit(): void {
    this.tableHeight = window.innerHeight * 0.70;
    this.carregarDados(false);
  }

  public carregarDados(carregarMais: boolean) {
    
    if (carregarMais) {
      let pontos: Relatorio;
      
      this.page++;

      pontos = this.pontoService.getPontos(this.page, this.pageSize);

      this.dados = [
        ...this.dados, ...pontos.pontos
      ];
      this.hasNext = pontos.hasNext;

    } else {
      let pontos: Relatorio;
      
      this.page = 1;

      pontos = this.pontoService.getPontos(this.page, this.pageSize);

      this.dados = pontos.pontos;
      this.hasNext = pontos.hasNext;

    }

  }

  protected gerarRelatorio() {
    // TODO: Método para gerar relatório.
  }

  protected editar() {
    // TODO: Método para editar o registro.
  }

}
