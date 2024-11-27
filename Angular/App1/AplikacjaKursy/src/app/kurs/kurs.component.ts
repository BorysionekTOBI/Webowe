import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kurs',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './kurs.component.html',
  styleUrl: './kurs.component.css'
})

export class KursComponent {
  // Deklaracja listy kursów
  kursy : string[] = ["Programowanie w C#", "Angular dla początkujących", "Kurs Django"]; 

  // Zmienna imie i nazwisko dla formularza
  imieNazwisko : string = '';

  // Zmienna dla numeru kursu
  numerKursu : number | null = null;

  // Funkcja wypisująca dane z formularza na konsolę
  zapiszDoKursu(){
    console.clear();                                          // Czyszczenie kosnoli
    console.log("Imie i nazwisko ", this.imieNazwisko);       // Wypisanie imienia i nazwiska kursanta 

    if (this.numerKursu !== null && this.numerKursu > 0 && this.numerKursu <= this.kursy.length){
      console.log("Wybrany numer kurs: ", this.numerKursu);     // Wypisanie kursu
      const wybranyKurs = this.kursy[ this.numerKursu -1];
      console.log("Wybrany kurs: ", wybranyKurs);
    }else{
      console.log("Niepoprawny numer kursu!");
    }
    
  }

}
