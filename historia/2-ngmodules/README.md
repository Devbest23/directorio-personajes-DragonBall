# Angular 2 a 16: la época de los NgModules

Esto **no compila solo**, es para leerlo y comparar con `src/app`.
Así se veía el mismo directorio en un proyecto típico de Angular 8–15.

Qué cambió desde entonces:

| Antes (NgModules)                              | Ahora (Angular 21)                               |
|------------------------------------------------|--------------------------------------------------|
| `app.module.ts` con `declarations` e `imports` | Componentes standalone, cada uno con `imports`   |
| `platformBrowserDynamic().bootstrapModule()`   | `bootstrapApplication(App, appConfig)`           |
| `HttpClientModule`, `RouterModule.forRoot()`   | `provideHttpClient()`, `provideRouter()`         |
| `constructor(private http: HttpClient)`        | `inject(HttpClient)`                             |
| `@Input()` / `@Output() new EventEmitter()`    | `input()` / `output()`                           |
| `*ngIf`, `*ngFor`                              | `@if`, `@for`                                    |
| `zone.js` detecta cambios "por magia"          | Signals + zoneless (por defecto en v21)          |
| Karma + Jasmine                                | Vitest                                           |
| `personaje-card.component.ts`                  | `personaje-card.ts`                              |
| Bootstrap / CSS a mano en `styles.css`         | TailwindCSS 4 vía PostCSS                        |
