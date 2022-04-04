/*
Crea un array di numeri interi e fai la somma di tutti gli elementi 
che sono in posizione dispari

*/

const num = [2,4,6,8];

let somma = 0;

for(let i = 1; i < num.length; i=i+2){
    somma = somma + num[i];
}
console.log(somma)