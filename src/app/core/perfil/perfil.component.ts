import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField, PoDynamicViewField } from '@po-ui/ng-components';
import { IUsuario } from 'src/app/shared/model/IUsuario.model';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  protected camposView: Array<PoDynamicViewField> = [];
  protected camposForm: Array<PoDynamicFormField> = [];
  protected dados: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    let dados: IUsuario | undefined;

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

    dados = this.authService.getUserData();

    if (dados) {
      this.dados = dados;
    }

  }

}
