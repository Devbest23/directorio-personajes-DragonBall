// Angular ~8-15: suscripción manual y limpieza con ngOnDestroy.
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Personaje } from '../../personajes/personaje';
import { PersonajesService } from '../../personajes/personajes.service';

@Component({
  selector: 'app-lista',
  template: `
    <input [(ngModel)]="texto" (ngModelChange)="filtrar()" />
    <app-personaje-card *ngFor="let p of filtrados; trackBy: porId" [personaje]="p"></app-personaje-card>
  `,
})
export class ListaComponent implements OnInit, OnDestroy {
  personajes: Personaje[] = [];
  filtrados: Personaje[] = [];
  texto = '';
  private sub?: Subscription;

  constructor(private servicio: PersonajesService) {}

  ngOnInit() {
    this.sub = this.servicio.listar().subscribe((r) => {
      this.personajes = r.items;
      this.filtrar();
    });
  }

  // Había que acordarse de recalcular a mano cada vez
  filtrar() {
    const t = this.texto.toLowerCase();
    this.filtrados = this.personajes.filter((p) => p.name.toLowerCase().includes(t));
  }

  porId(_: number, p: Personaje) {
    return p.id;
  }

  ngOnDestroy() {
    this.sub?.unsubscribe(); // si se olvidaba: fuga de memoria
  }
}
