import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ksiazki',
  imports: [CommonModule, FormsModule],
  templateUrl: './ksiazki.component.html',
  styleUrl: './ksiazki.component.css'
})
export class KsiazkiComponent {
  bookTitle : string = ''; // Zmienna przechowująca tytuł ksiazek
  Author : string = '';
  bookCategory : string = "";
  bookCategories: string[] = ["", "Dramat", "Wiersz", "Kryminał", "Romans", "Historyczna"]; // Zmienna przechowująca kategorię filmów
  wynik : string = ''; // Zmienna przechowująca wybrane dane
  newbookCategory : string = '';
  books: { title: string; author: string; category: string }[] = []; // Tablica przechowująca dodane książki


  addBook() {
    if (this.bookTitle && this.Author && this.bookCategory) {
      this.books.push({
        title: this.bookTitle,
        author: this.Author,
        category: this.bookCategory
      });
      this.bookTitle = '';
      this.Author = '';
      this.bookCategory = '';
    } else {
      console.error("Wszystkie pola muszą być wypełnione!");
    }
  }

  // Dodawanie categorii
  addCategory(){
    this.bookCategories.push(this.newbookCategory);
    this.newbookCategory = '';
  }
}

