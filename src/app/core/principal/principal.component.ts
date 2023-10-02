import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem, PoToolbarProfile } from '@po-ui/ng-components';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {

  constructor(private router: Router) { }

  readonly menus: Array<PoMenuItem> = [
    {label: "Meu perfil", shortLabel: "Perfil", action: () => {this.goTo("/perfil")},  icon: "po-icon po-icon-user" },
    {label: "Meu ponto" , shortLabel: "Ponto" , action: () => {this.goTo("")},  icon: "po-icon po-icon-change" },
    {label: "Relatórios", shortLabel: "Relat" , action: () => {this.goTo("/relatorio")},  icon: "po-icon po-icon-document-filled" },
  ];

  readonly profile: PoToolbarProfile = {
    avatar: "../assets/images/profile-avatar.png",
    title: "Lucas Fagundes"
  }

  private goTo(url: string) {
    this.router.navigate([`/${url}`])
  }


}
