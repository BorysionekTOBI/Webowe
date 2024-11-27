let abecadlo: string[] = ["aaa", "bbb", "ccc"];
let znaki: string[] = ["xxx", "yyy", "zzz"];

let wszystkie = [...abecadlo, ...znaki];
console.log(wszystkie);

//-----------------------------------------------
//tuple

let osoba: [string, number, boolean] = ["Tobiasz", 18, true];
let xyz: [number, number, number] = [1, 3, 5];
console.log(osoba);
console.log(xyz);

osoba.unshift("Pan");
console.log(osoba);

osoba.push(true);
