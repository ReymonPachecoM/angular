package RenapoDev.demo.repository;




import org.springframework.data.jpa.repository.JpaRepository;

import RenapoDev.demo.model.Persona;

public interface PersonaRepository extends JpaRepository<Persona, Long> {
}
