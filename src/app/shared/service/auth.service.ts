import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logado: boolean = false;

  constructor() { }

  public logar(usuario: string, senha: string): boolean {

    if (usuario === "admin" && senha === "1234") {
      this.logado = true;

      localStorage.setItem("token", "abc123456789");
    }
    
    return this.logado;
  }

  public deslogar() {
    localStorage.clear();
    this.logado = false;
  }

  public isAuthenticated(): boolean {
    return this.logado;
  }

}
