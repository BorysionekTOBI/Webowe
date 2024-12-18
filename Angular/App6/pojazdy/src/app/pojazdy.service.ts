import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PojazdyService {
  private apiUrl = "http://localhost:3000/pojazdy";
  constructor(private http:HttpClient) { }

  // Metoda pobierania pojazdów z endpointa

  getPojazdy() : Observable<any>{
    return this.http.get(this.apiUrl);
  }

  // Metoda wstawiania pojazdó do endpointa

  addPojazd(pojazd : any) : Observable<any>{
    return this.http.post(this.apiUrl, pojazd);
  }
}
