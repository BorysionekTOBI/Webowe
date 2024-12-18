import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, HttpClientModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // Zmienne przechowujące 
  title = 'Rejestracja pojazdów';
  pojazdy: any[] = [];
  pojazd = {
    marka: '',
    model: '',
    numer_rejestracyjny: '',
    wlasciciel: '',
    email: ''
  };

  // Adres endpointa
  private apiUrl = "http://localhost:3000/pojazdy";

  // Konstruktor klasy HttpCLient
  constructor(private http:HttpClient){}

  // Metoda na starcie pobierająca pojazdy metoda getPojazdy()
  ngOnInit() {
      this.getPojazdy();
  }

  // Metoda pobierania pojazdów z endpointa
  getPojazdy(){
    this.http.get<any[]>(this.apiUrl).subscribe((data)=>{
      this.pojazdy = data;
      console.log('Pobrane pojazdy:', data);
    })
  };

  addPojazd(){
      this.http.post<any>(this.apiUrl, this.pojazd).subscribe(() =>{
        this.getPojazdy();
        // Reset pól formularza
        this.pojazd = { marka: '', model: '', numer_rejestracyjny: '', wlasciciel: '', email: '' };
      });
    location.reload();
  };


}