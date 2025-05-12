// src/app/services/logging.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private apiUrl = 'https://tuservidor.com/api/logs';  // Cambia esto por tu URL real

  constructor(private http: HttpClient) {}

  log(message: string): void {
    console.log('LOG:', message);
    this.sendLogToServer('log', message).subscribe();
  }

  error(message: string): void {
    console.error('ERROR:', message);
    this.sendLogToServer('error', message).subscribe();
  }

  warn(message: string): void {
    console.warn('WARNING:', message);
    this.sendLogToServer('warn', message).subscribe();
  }

  info(message: string): void {
    console.info('INFO:', message);
    this.sendLogToServer('info', message).subscribe();
  }

  private sendLogToServer(level: string, message: string): Observable<any> {
    return this.http.post(this.apiUrl, { level, message });
  }
}
