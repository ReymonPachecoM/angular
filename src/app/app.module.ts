// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component/app.component';
import { appConfig } from './app.config';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule), // <-- Provee HttpClient
    ...appConfig.providers,
  ],
}).catch(err => console.error(err));