import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  
  protected profile: PoToolbarProfile;
  protected profileActions: Array<PoToolbarAction>;

  protected readonly menus: Array<PoMenuItem> = [
    {label: "Meu perfil", shortLabel: "Perfil", action: () => {this.goTo("/perfil")},  icon: "po-icon po-icon-user" },
    {label: "Meu ponto" , shortLabel: "Ponto" , action: () => {this.goTo("")},  icon: "po-icon po-icon-change" },
    {label: "Relatórios", shortLabel: "Relat" , action: () => {this.goTo("/relatorio")},  icon: "po-icon po-icon-document-filled" },
  ];

  ngOnInit(): void {
    let userData = this.authService.getUserData();
    
    if (userData) {
      this.profile = {
        avatar: "../assets/images/profile-avatar.png",
        title: userData.nome
      };

      this.profileActions = [
        { label: "Perfil", action: () => { this.goTo("/perfil") } },
        { label: "Sair", action: () => { this.sair() } }
      ];
      
    }

  }

  private goTo(url: string) {
    this.router.navigate([`/${url}`])
  }

  private sair() {
    this.authService.deslogar();    
    this.goTo("/login");
  }

}
