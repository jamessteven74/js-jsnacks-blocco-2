/*
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi 
e da queste vuole generare una falsa lista di invitati 
con nome e cognome.
*/

const list_names = ["john", "malcom", "louis", "topolino", "pluto"]
console.log(list_names)

const list_surnames = ["Doe", "Murray", "Amstrong", "Paperino", "Pippo"]
console.log(list_surnames)

const empty_list = []
console.log(empty_list)

for(let i= 0; empty_list < list_names.length; i++){
    const list_name = list_names [i]
    const list_surname = list_surnames [i]
    empty_list.push (`${list_name} ${list_surname}`)
}
console.log(empty_list)


let z = 0

while (empty_list.length != list_names.length){
    const list_name = list_names [z]
    const list_surname = list_surnames [z]
    empty_list.push  (`${list_name} ${list_surname}`)
}
console.log(empty_list)


