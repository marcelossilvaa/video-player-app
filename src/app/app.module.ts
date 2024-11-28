import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';  // Arquivo de rotas
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';  // Nova abordagem

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,  // Configuração das rotas
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())  // Configurando o HttpClient com interceptores
  ],
})
export class AppModule {}
