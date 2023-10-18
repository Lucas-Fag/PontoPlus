import { Injectable } from '@angular/core';
import { IUsuario } from '../model/IUsuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registros: Map<string, IUsuario> = new Map<string, IUsuario>();

  constructor() { }

  public logar(email: string, senha: string): boolean {
    let usuario: IUsuario | undefined = this.registros.get(email);

    if (usuario && usuario.senha === senha) {
      localStorage.setItem("userData", JSON.stringify(usuario));
      return true;
    }
    
    return false;
  }

  public deslogar() {
    localStorage.clear();
  }

  public isAuthenticated(): boolean {
    let userData: string | null = localStorage.getItem("userData");
    let logado: boolean = false;

    if (userData) {
      logado = true;
    }

    return logado;
  }

  public registrar(usuario: IUsuario) {

    this.registros.set(usuario.email, usuario);
  }

  public getUserData(): IUsuario | undefined {
    let userData: IUsuario | undefined = undefined;
    let localData: string | null = localStorage.getItem("userData");

    if (localData) {
      userData = JSON.parse(localData);

      if (userData) {
        userData.senha = "";
      }
    }

    return userData;
  }

}
