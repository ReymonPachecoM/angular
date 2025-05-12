import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonaFormComponent } from "../components/persona-form/persona-form.component";  // Asegúrate de importar FormsModule


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PersonaFormComponent],
})
export class AppComponent {
  title = 'CurpApp';
}
