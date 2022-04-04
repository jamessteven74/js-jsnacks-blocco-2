/*
Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

*/


//creo un array

const numeri = [1,2,3,4,4,5,5,4,4,4,4,4,4,4,4,4];

//creo secondo aray

const  numero_2 = [6,7,8,9,10,1,2,4,6,5,4];

//numeri.push(5)

//console.log(numeri)

if(numeri.length < numero_2.length){
  
    while(numeri.length !== numero_2.length){
        numeri.push(1)
    }
}else if (numeri.length > numero_2.length){
   
    while(numeri.length !== numero_2.length){
        numero_2.push(1)

    }
}
console.log(numeri,numero_2)
