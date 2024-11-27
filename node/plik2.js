"use strict";
let abecadlo = ["aaa", "bbb", "ccc"];
let znaki = ["xxx", "yyy", "zzz"];
let wszystkie = [...abecadlo, ...znaki];
console.log(wszystkie);
//-----------------------------------------------
//tuple
let osoba = ["Tobiasz", 18, true];
let xyz = [1, 3, 5];
console.log(osoba);
console.log(xyz);
osoba.unshift("Pan");
console.log(osoba);
osoba.push(true);
