// app.config.ts

import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Si decides usar rutas, importa tus rutas aquí

export const appConfig = {
  providers: [
    provideHttpClient(),  // Asegúrate de que HttpClient esté proporcionado
   // provideRouter([])     // Si tienes rutas, puedes agregarlas aquí
  ]
};