// Angular ~8-15: decoradores @Input/@Output, EventEmitter e inyección por constructor.
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Personaje } from '../personaje';

@Component({
  selector: 'app-personaje-card',
  template: `
    <article class="card" [class.fav]="esFavorito">
      <img [src]="personaje.image" [alt]="personaje.name" />
      <h3>{{ personaje.name }}</h3>
      <p *ngIf="personaje.gender === 'Female'; else masculino">Femenino</p>
      <ng-template #masculino><p>Masculino</p></ng-template>
      <button (click)="marcar()">Favorito</button>
    </article>
  `,
})
export class PersonajeCardComponent implements OnChanges {
  @Input() personaje!: Personaje;           // el "!" porque TS no sabe que el padre lo pasa
  @Input() esFavorito = false;
  @Output() favoritoCambiado = new EventEmitter<number>();

  ngOnChanges(cambios: SimpleChanges) {
    // Para reaccionar a un cambio de input había que usar este hook
    if (cambios['personaje']) console.log('cambió el personaje');
  }

  marcar() {
    this.favoritoCambiado.emit(this.personaje.id);
  }
}
