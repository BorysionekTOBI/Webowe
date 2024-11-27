"use strict";
let avg;
avg = (liczby) => {
    let suma = 0;
    liczby.forEach((e) => { suma += e; });
    return suma / liczby.length;
};
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(avg(num));
