package RenapoDev.demo.service;



import org.springframework.stereotype.Service;

import RenapoDev.demo.model.Persona;
import RenapoDev.demo.repository.PersonaRepository;

import java.util.List;

@Service
public class PersonaService {

    private final PersonaRepository personaRepository;

    public PersonaService(PersonaRepository personaRepository) {
        this.personaRepository = personaRepository;
    }

    public Persona registrarPersona(Persona persona) {
        persona.setCurp(generarCurp(persona));
        return personaRepository.save(persona);
    }

    public List<Persona> obtenerPersonas() {
        return personaRepository.findAll();
    }

    private String generarCurp(Persona persona) {
        String nombre = persona.getNombre().substring(0, 1).toUpperCase();
        String apellido = persona.getApellido().substring(0, 2).toUpperCase();
        String fecha = persona.getFechaNacimiento().toString().replaceAll("-", "").substring(2, 8);
        String estado = persona.getEstado().substring(0, 2).toUpperCase();
        return apellido + nombre + fecha + estado;
    }
}
