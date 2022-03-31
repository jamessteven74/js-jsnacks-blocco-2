/*
Snack2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.

*/

let number_user = parseInt(prompt('Inserisci un numero'));

if (number_user % 2 === 0) {
    console.log(number_user);
} else {
    number_user += 1;
    console.log(number_user);
}    



switch (number_user) {
    case number_user % 2 === 0:
        console.log(number_user);
        break;

    default:
        number_user += 1;
        console.log(number_user);
        break;
}