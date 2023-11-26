import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent, PoPageAction, PoRadioGroupOption, PoTableColumn, PoTableColumnSpacing } from '@po-ui/ng-components';
import { PontoService, Relatorio, RelatorioItem, TipoPonto } from 'src/app/shared/service/ponto.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) modalEditar: PoModalComponent;

  constructor(
    private pontoService: PontoService
  ) { }
  
  protected readonly colunas: Array<PoTableColumn> = [
    { property: "hora", label: "Horário", type: "time", format: "HH:mm", width: "8%" },
    {
      property: "tipo", label: "Tipo", width: "5%", type: "subtitle", subtitles: [
        { value: "E", content: "E", label: "Entrada", color: "color-09" },
        { value: "S", content: "S", label: "Saída", color: "color-10" }
      ]
    },
    { property: "observacao", label: "Observação", width: "50%" },
    { property: "data", label: "Data", width: "15%", type: "date" },
    {
      property: "acoes", label: "Ações", width: "5%", type: "icon", icons: [
        { value: "edit"  , icon: 'po-icon-edit', action: this.editar.bind(this) },
        { value: "delete", icon: 'po-icon-delete', action: this.excluir.bind(this) }
      ]
    }
  ];
  
  protected dados: Array<RelatorioItem> = [];
  protected hasNext: boolean = true;
  protected tableHeight: number = 0;
  protected readonly espacamento = PoTableColumnSpacing.Large;
  private page: number = 1;
  private pageSize: number = 10;
  
  protected regEditando: any = {};
  protected acaoConfirmar: PoModalAction = {
    label: "Confirmar",
    action: () => { this.salvarEdicao() }
  };
  protected acaoCancelar: PoModalAction = {
    label: "Cancelar",
    action: () => { this.regEditando = {}, this.modalEditar.close() }
  };
  protected tipoOptions: Array<PoRadioGroupOption> = [
    {label: "Entrada", value: TipoPonto.ENTRADA },
    {label: "Saída"  , value: TipoPonto.SAIDA   }
  ];
  
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

  protected editar(row: RelatorioItem) {
    this.regEditando = JSON.parse(JSON.stringify(row));

    this.regEditando.data = new Date(this.regEditando.data);

    this.modalEditar.open();
  }

  protected salvarEdicao() {
    this.pontoService.alterar(this.regEditando.indice, this.regEditando);
    this.modalEditar.close();
    this.carregarDados(false);
  }

  protected excluir(row: RelatorioItem) {
    this.pontoService.removePonto(row.indice);
    this.carregarDados(false);
  }

}
