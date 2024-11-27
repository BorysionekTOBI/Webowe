import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-osoby',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './osoby.component.html',
  styleUrl: './osoby.component.css'
})
export class OsobyComponent {

  // Deklaracja listy list 3 osób
  osoby = [["Jan", "Chrzan", 19], ["Pola", "Cola", 44], ["Keb", "Bab", 12]];

   // Zmienne do przechowywania danych wpisanych przez użytkownika
   imie: string = '';
   nazwisko: string = '';
   wiek: number | null = null;
 
   // Metoda do sprawdzenia istnienia osoby
   sprawdzOsobe() {
     // Sprawdzenie, czy istnieje osoba o wpisanych danych
     const osobaIstnieje = this.osoby.some(
       ([imie, nazwisko, wiek]) => imie === this.imie && nazwisko === this.nazwisko && wiek === this.wiek
     );
 
     // Wypisanie wyniku w konsoli
     if (osobaIstnieje) {
       console.clear();
       console.log('Taka osoba istnieje');
     } else {
       console.log('Nie ma takiej osoby');
     }
   }
 }