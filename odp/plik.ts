let avg: (liczby: number[]) => number;
avg = (liczby: number[]) => {
    let suma: number = 0;
    liczby.forEach((e: number) => {suma += e;});
    return suma / liczby.length;
}

let num = [1,2,3,4,5,6,7,8,9,10];
console.log(avg(num));