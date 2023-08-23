import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField, PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  protected camposView: Array<PoDynamicViewField> = [];
  protected camposForm: Array<PoDynamicFormField> = [];
  protected dados: any;

  ngOnInit(): void {
    this.camposView = [
      { property: "nome", label: "Nome", gridColumns: 6, divider: "Geral" },
      { property: "idade", label: "Idade", gridColumns: 6, },
      { property: "cargaHoraria", label: "Carga horária de trabalho", gridColumns: 12 },
      { property: "email", label: "Email", divider: "Contato", gridColumns: 6 },
      { property: "telefone", label: "Telefone", gridColumns: 6 }
    ];

    this.camposForm = [
      {property: "senha", label: "Redefinir senha", placeholder: "Digite aqui...", secret: true, gridColumns: 6, divider: "Alterar dados"},
      {property: "confirmarSenha", label: "Confirmação de senha", placeholder: "Digite aqui...", secret: true, gridColumns: 6},
      {property: "cargaHoraria", label: "Carga horária de trabalho", type: "number", gridColumns: 3},
    ];

    this.dados = {
      nome: "Ricardo da Silva Moura", idade: "27 anos", email: "ricardo.moura@teste.com", telefone: "(47)99999-9999", cargaHoraria: "8 horas"
    };

  }

}
