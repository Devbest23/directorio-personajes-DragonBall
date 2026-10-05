import { Planeta } from '@features/planetas/models/planeta.model';

// Forma de un personaje tal como la devuelve https://dragonball-api.com/api/characters
// Solo tipamos lo que vamos a usar.
// [E08] Union type: gender solo acepta estos 3 textos
export type Genero = 'Male' | 'Female' | 'Unknown';

export interface Personaje {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: Genero;
  affiliation: string;
  image: string;
  description?: string;
}

export interface Transformacion {
  id: number;
  name: string;
  image: string;
  ki: string;
}

// El detalle (/characters/:id) trae además el planeta y las transformaciones
// [E09] extends: hereda todo Personaje y suma planeta y transformaciones (? = opcional)
export interface PersonajeDetalle extends Personaje {
  originPlanet?: Planeta;
  transformations?: Transformacion[];
}

// Lo que define una búsqueda en el listado
export interface Filtro {
  pagina: number;
  nombre: string;
  raza: string;
  genero: string;
}

// Razas que ofrece el filtro del listado
// [E10] Constantes del dominio junto a sus modelos
export const RAZAS = ['Saiyan', 'Human', 'Namekian', 'Frieza Race', 'Android', 'Majin', 'God', 'Angel'];
