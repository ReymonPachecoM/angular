package RenapoDev.demo.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import RenapoDev.demo.model.Persona;
import RenapoDev.demo.service.PersonaService;

import java.util.List;

@RestController
@RequestMapping("/api/personas")
@CrossOrigin(origins = "http://localhost:4200")
public class PersonaController {

    private final PersonaService personaService;

    public PersonaController(PersonaService personaService) {
        this.personaService = personaService;
    }

    @PostMapping
    public Persona registrarPersona(@RequestBody Persona persona) {
        return personaService.registrarPersona(persona);
    }

    @GetMapping
    public List<Persona> obtenerPersonas() {
        return personaService.obtenerPersonas();
    }

    @GetMapping("/personas/{curp}")
    public ResponseEntity<Persona> obtenerPersonaPorCurp(@PathVariable String curp) {
        Persona persona = personaService.buscarPorCurp(curp);
        if (persona != null) {
            return ResponseEntity.ok(persona);
        } else {
            return ResponseEntity.notFound().build();
        }
}

}
