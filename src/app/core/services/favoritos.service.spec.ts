import { TestBed } from '@angular/core/testing';
import { FavoritosService } from './favoritos.service';

describe('FavoritosService', () => {
  // [E80] Cada prueba arranca sin favoritos
  beforeEach(() => localStorage.clear());

  it('agrega y quita un favorito', () => {
    const favs = TestBed.inject(FavoritosService);
    favs.alternar(1);
    expect(favs.es(1)).toBe(true);
    expect(favs.total()).toBe(1);
    favs.alternar(1);
    expect(favs.es(1)).toBe(false);
  });
});
