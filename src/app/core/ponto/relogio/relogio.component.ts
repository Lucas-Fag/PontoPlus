import { NgPlural } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.scss']
})
export class RelogioComponent {
  protected hora: string = this.getHoraAtual();
  protected timerSubsciption: Subscription = timer(0, 1000).subscribe(() => {
    this.atualizaHora();
  });
  
  private atualizaHora(): void {
    this.hora = this.getHoraAtual();
  }

  private getHoraAtual(): string {
    let date: Date = new Date();
    let horas: string = date.getHours().toString().padStart(2, "0");
    let minutos: string = date.getMinutes().toString().padStart(2, "0");
    let segundos: string = date.getSeconds().toString().padStart(2, "0");

    return `${horas}:${minutos}:${segundos}`;
  }

}
