//SNACK 1 
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.





//CICLO_FOR

// let somma

// let numero_utente


// console.log (somma, numero_utente)

// for(let i = 0; i < 5; i++){
//     numero_utente = parseInt(prompt("inserisci un numero"));
//     somma = parseInt(numero_utente + somma)
//     somma =  somma + numero_utente
// }
// console.log(+ somma)


//ciclo_while

let somma, numero_utente, i;
somma = 0;
i = 1

while (i <= 10) {
    numero_utente = parseInt(prompt('Inserisci un numero'));
    somma = somma + numero_utente;
    i++
}
console.log(somma); 
