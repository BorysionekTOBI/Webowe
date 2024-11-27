"use strict";
// zadanie 1
let miesiac = 11;
let sprawdz = miesiac > 12 ? "niepoprawny numer miesiaca. Mamy 12 miesiecy!!!" : "Poprawny miesiac!";
console.log(sprawdz);
// Zadanie 2 
let liczba = 2;
let czyarzysta = liczba % 2 == 0 ? "Parzysta" : "Nieparzysta";
console.log(czyarzysta);
// Zadanie 3
let cena = 0;
let przejazd = 36;
if (przejazd > 0 && przejazd < 15) {
    cena += 3;
}
if (przejazd >= 16 && przejazd <= 40) {
    cena += 1.5 + (przejazd * 0.20);
}
if (przejazd > 40) {
    cena += 1 + (przejazd * 0.10);
}
console.log("Cena przejazdu wynosi: " + cena);
// Zadanie 4
let owoce = ["jabłko", "arbuz", "banan", "gruszka"];
console.log("Długość tablicy: " + owoce.length);
let posortowaneOwoce = [...owoce].sort();
console.log(posortowaneOwoce);
owoce.push("ananas");
console.log(owoce);
owoce.shift();
console.log(owoce);
owoce.pop();
console.log(owoce);
owoce.unshift("ananas");
console.log(owoce);
owoce.reverse();
console.log(owoce);
