import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularzComponent } from "./formularz/formularz.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormularzComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {
  title = 'Rejestracja_uzytkownikow';
}
