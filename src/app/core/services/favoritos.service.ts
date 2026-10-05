import { Injectable, computed, effect, signal } from '@angular/core';

// Estado global de la app: lo usan el header y varias features, por eso vive en core.
// Cualquier componente que inyecte este servicio ve los mismos favoritos.
@Injectable({ providedIn: 'root' })
export class FavoritosService {
  // [E12] signal privado: arranca con lo guardado en localStorage
  private readonly ids = signal<number[]>(leer());

  // Solo lectura hacia afuera: nadie puede hacer .set() desde un componente
  // [E13] asReadonly(): afuera se puede leer, pero no hacer .set()
  readonly favoritos = this.ids.asReadonly();
  // [E14] computed: se recalcula solo cuando cambia ids
  readonly total = computed(() => this.ids().length);

  constructor() {
    // [E15] effect: corre cada vez que cambia ids y lo guarda
    effect(() => localStorage.setItem('favoritos', JSON.stringify(this.ids())));
  }

  es(id: number) {
    return this.ids().includes(id);
  }

  alternar(id: number) {
    // [E16] update() inmutable: siempre un arreglo nuevo, nunca push()
    this.ids.update((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]));
  }
}

function leer(): number[] {
  try {
    return JSON.parse(localStorage.getItem('favoritos') ?? '[]');
  } catch {
    return [];
  }
}
