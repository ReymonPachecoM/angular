import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // <-- Importa esto
import { AppComponent } from './app/app.component/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // <-- Proporciona HttpClient
  ],
}).catch((err) => console.error(err));