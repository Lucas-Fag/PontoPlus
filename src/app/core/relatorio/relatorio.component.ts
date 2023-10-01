import { Component, OnInit } from '@angular/core';
import { PoPageAction, PoTableColumn, PoTableColumnSpacing } from '@po-ui/ng-components';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {
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
  
  ngOnInit(): void {
    this.tableHeight = window.innerHeight * 0.70;
    this.carregarDados(false);
  }

  public carregarDados(carregarMais: boolean) {
    if (carregarMais) {
      
      this.dados = [...this.dados, ...[
        { hora: "18:30:00", tipo: "S", observacao: "Saída", data: new Date(2023, 4, 24), status: "I", acoes: ["edit"] },
        { hora: "18:30:00", tipo: "E", observacao: "Retorno do almoço", data: new Date(2023, 4, 24), status: "I", acoes: ["edit"] },
        { hora: "12:00:00", tipo: "S", observacao: "Saída para almoço", data: new Date(2023, 4, 24), status: "I", acoes: ["edit"] },
        { hora: "18:30:00", tipo: "E", observacao: "Primeira entrada", data: new Date(2023, 4, 23), status: "C", acoes: ["edit"] }
      ]]
      this.hasNext = false;

    } else {
      
      this.dados = [
        { hora: "18:30:00", tipo: "S", observacao: "Saída", data: new Date(2023, 4, 24), status: "I", acoes: ["edit"] },
        { hora: "18:30:00", tipo: "E", observacao: "Retorno do almoço", data: new Date(2023, 4, 24), status: "I", acoes: ["edit"] },
        { hora: "12:00:00", tipo: "S", observacao: "Saída para almoço", data: new Date(2023, 4, 24), status: "I", acoes: ["edit"] },
        { hora: "18:30:00", tipo: "E", observacao: "Primeira entrada", data: new Date(2023, 4, 23), status: "C", acoes: ["edit"] }
      ];
      this.hasNext = true;

    }
  }

  protected gerarRelatorio() {
    // TODO: Método para gerar relatório.
  }

  protected editar() {
    // TODO: Método para editar o registro.
  }

}
