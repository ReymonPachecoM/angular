import { PersonaService, Persona } from '../../services/persona.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persona-form',
  standalone: true,  // Marca este componente como standalone
  imports: [CommonModule, FormsModule],  // Importa los módulos necesarios
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {

  // Persona a registrar
  persona: Persona = {
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    estado: '',
    sexo: 'H',  // Valor por defecto para el sexo
    curp: ''
  };

  // Persona encontrada por CURP
  personaEncontrada: Persona | null = null;

  // CURP que el usuario ingresa para buscar
  curpBusqueda: string = '';

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    // No es necesario cargar las personas en este caso
  }

  // Función para registrar una persona
  registrar() {
    this.persona.curp = this.generarCurp();  // Generamos la CURP antes de registrar

    // Llamada al servicio para registrar la persona
    this.personaService.registrarPersona(this.persona).subscribe(res => {
      // Limpiar el formulario después de registrar
      this.persona = { nombre: '', apellido: '', fechaNacimiento: '', estado: '', sexo: 'H', curp: '' };
    });
  }

  // Función para generar la CURP
  generarCurp(): string {
    // Ejemplo básico de generación de CURP (deberías mejorar esta lógica según los requisitos reales)
    let curp = `${this.persona.apellido.slice(0, 2)}${this.persona.nombre.slice(0, 1)}${this.persona.fechaNacimiento.replace(/-/g, "").slice(2, 4)}${this.persona.sexo === 'H' ? 'H' : 'M'}${this.persona.estado.slice(0, 1)}`;
    return curp.toUpperCase();
  }

  // Función para buscar una persona por CURP
  buscarPorCurp() {
    if (this.curpBusqueda) {
      this.personaService.obtenerPersonaPorCurp(this.curpBusqueda).subscribe(res => {
        // Si la persona se encuentra, se asigna a personaEncontrada
        this.personaEncontrada = res;
      }, error => {
        // En caso de error, limpiamos personaEncontrada
        this.personaEncontrada = null;
        console.error('Error buscando persona:', error);
      });
    }
  }
}


