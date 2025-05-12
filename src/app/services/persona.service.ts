import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Persona {
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  estado: string;
  sexo: string;
  curp: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiUrl = 'http://localhost:8080/api/personas'; // URL del backend

  constructor(private http: HttpClient) {}

  registrarPersona(persona: Persona): Observable<any> {
    return this.http.post(this.apiUrl, persona);
  }

  obtenerPersonaPorCurp(curp: string): Observable<Persona> {
    return this.http.get<Persona>(`${this.apiUrl}/${curp}`);
  }
}
