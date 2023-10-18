import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoDialogAlertOptions, PoDialogService } from '@po-ui/ng-components';
import { IUsuario } from 'src/app/shared/model/IUsuario.model';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  protected formulario: FormGroup;

  constructor(
    private dialogService: PoDialogService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}
  
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required]],
      idade: ['', []],
      telefone: ['', []],
      senha: ['', [Validators.required]],
      confirmacaoSenha: ['', [Validators.required, samePassword]],
      cargaHoraria: [0, [Validators.required]],
      politicas: [false, [Validators.required, Validators.requiredTrue]]
    });
  }

  protected visualizaPoliticas() { 
    let dialog: PoDialogAlertOptions = {
      title: "Políticas de privacidade",
      message: `Ao aceitar você permite que todos seus dados sejam comercializados.`
    };
    
    this.dialogService.alert(dialog);
  }

  protected salvar() {
    let usuario: IUsuario;

    if (!this.formulario.valid) {
      return;
    }

    usuario = {
      email: this.formulario.get("email")?.value,
      nome: this.formulario.get("nome")?.value,
      idade: this.formulario.get("idade")?.value,
      senha: this.formulario.get("senha")?.value,
      cargaHoraria: this.formulario.get("cargaHoraria")?.value,
      telefone: this.formulario.get("telefone")?.value
    };

    this.authService.registrar(usuario);
    this.router.navigate(['']);
  }

  protected cancelar() {
    this.router.navigate(['']);
  }

}

function samePassword(control: AbstractControl) {
  let passwordConfirmation: string = control.value;
  let parent = control.parent;

  if (parent) {
    let password: string = parent.get("senha")?.value;
    
    if (password !== passwordConfirmation) {
      return {"notSamePassword": true};
    }
  }

  return null;
}