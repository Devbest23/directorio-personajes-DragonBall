import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PlanetasService } from './planetas.service';

describe('PlanetasService', () => {
  let servicio: PlanetasService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    servicio = TestBed.inject(PlanetasService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('solicita planetas paginados al endpoint de la API', () => {
    let nombres: string[] = [];
    servicio.listar(2).subscribe((respuesta) => {
      nombres = respuesta.items.map((planeta) => planeta.name);
    });

    const req = http.expectOne((request) => request.url.endsWith('/planets'));
    expect(req.request.params.get('page')).toBe('2');
    expect(req.request.params.get('limit')).toBe('12');
    req.flush({
      items: [{ id: 1, name: 'Namek', isDestroyed: true, description: '', image: '' }],
      meta: { totalItems: 20, itemCount: 1, itemsPerPage: 12, totalPages: 2, currentPage: 2 },
    });

    expect(nombres).toEqual(['Namek']);
  });
});
