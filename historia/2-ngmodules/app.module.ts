// Angular ~8-15. Cada componente tenía que "declararse" en un módulo.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajeCardComponent } from './personajes/personaje-card/personaje-card.component';
import { ListaComponent } from './paginas/lista/lista.component';

@NgModule({
  declarations: [AppComponent, PersonajeCardComponent, ListaComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// main.ts
// platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
