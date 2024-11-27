import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularz',
  imports: [CommonModule, FormsModule],
  templateUrl: './formularz.component.html',
  styleUrl: './formularz.component.css'
})
export class FormularzComponent {
  // Obiekt reprezentujący dane użytkownika
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: 16,
    dataProcessingConsent: false,
    jobPosition: ''
  };

  // Lista użytkowników
  employees: any[] = [];

  // Zmienna do obsługi błędu e-maila i hasła
  emailError: boolean = false;
  passwordError: boolean = false;

  // Funkcja walidacji e-maila
  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  // Funkcja walidacji hasła
  validatePassword(password: string): boolean {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    return passwordPattern.test(password);
  }

  // Obsługa dodania użytkownika
  registerUser() {
    // Walidacja e-maila
    if (!this.validateEmail(this.user.email)) {
      this.emailError = true;
      alert('Podaj poprawny adres e-mail!');
      return;
    } else {
      this.emailError = false;
    }

    // Walidacja hasła
    if (!this.validatePassword(this.user.password)) {
      this.passwordError = true;
      alert('Hasło musi mieć co najmniej 8 znaków, zawierać co najmniej jedną dużą literę, cyfrę oraz znak specjalny!');
      return;
    } else {
      this.passwordError = false;
    }

    // Walidacja haseł
    if (this.user.password !== this.user.confirmPassword) {
      alert('Wprowadź takie samo hasło!');
      return;
    }

    // Walidacja wieku
    if (this.user.age === null || this.user.age < 16) {
      alert('Wiek musi być większy lub równy 16 lat!');
      return;
    }

    // Dodanie użytkownika do listy
    this.employees.push({ ...this.user });
    alert('Pomyślnie dodano użytkownika');

    // Resetowanie formularza
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      age: 16,
      dataProcessingConsent: false,
      jobPosition: ''
    };
  }
}
