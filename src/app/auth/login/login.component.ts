import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoNotification, PoNotificationService } from '@po-ui/ng-components';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  protected userName: string = "";
  protected userPassword: string = "";

  constructor(
    private notificationService: PoNotificationService,
    private authService: AuthService,
    private router: Router
  ) { }

  protected logar() {

    if (!this.userName || !this.userPassword) {
      let notification: PoNotification = {
        message: "Usuário ou senha não informado!"
      };

      this.notificationService.warning(notification);
      return;
    }

    if (this.authService.logar(this.userName, this.userPassword)) {
      this.router.navigate(['']);
      
    } else {
      let notification: PoNotification = {
        message: "Usuário ou senha inválido!"
      };

      this.notificationService.error(notification);
    }

  }

}
