import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-film',
  imports: [CommonModule, FormsModule],
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent {
  filmTitle : string = ''; // Zmienna przechowująca tytuł filmu
  filmCategory : string = "";
  filmCategories: string[] = ["", "Komedia", "Obyczajowy", "Sensacyjny", "Horror", "SciF" ]; // Zmienna przechowująca kategorię filmów
  wynik : string = ''; // Zmienna przechowująca wybrane dane
  newCategory : string = '';

  // Metoda wypisująca film w konsoli
  addFilm(){
    console.log({tytuł: this.filmTitle, kategoria: this.filmCategory})
    if (this.filmTitle != "" || this.filmCategory != ""){
        this.wynik = "Wybrano " + this.filmTitle + " z kategorii " + this.filmCategory;
    }
    else{
        this.wynik = "Nie wybrano filmu...";
    }
    this.filmTitle = '';
    this.filmCategory = '';
  }

  // Dodawanie 
  addCategory(){
    this.filmCategories.push(this.newCategory);
    this.newCategory = '';
  }
}
