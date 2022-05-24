/*
Crea due array che hanno un numero di elementi diversi.  
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

//dichiarazione quanti numeri per l'array uno e quanti per l'array due
const quantiArrayUno = parseInt(prompt("Quanti numeri deve avere il primo array?"));
const quantiArrayDue = parseInt(prompt("Quanti numeri deve avere il secondo array?"));

//booleana per il check degli errori
let errore = false;


//condizione per verificare che la lunghezza dei vettori non sia NaN
if(isNaN(quantiArrayUno) || isNaN(quantiArrayDue)){
    errore = true;
    alert("ATTENZIONE UNO DEI DUE VALORI INSERITI O ENTRAMBI NON SONO NUMERI!");
}

//dichiarazione degli array
const arrayUno = [];
const arrayDue = [];


//caricamento degli array
//agli array aggiungo l'indice I invece di generare un numero random come valore
for(let i = 0 ; i < quantiArrayUno ; i++) {
    arrayUno.push(i);
}

for(let i = 0 ; i < quantiArrayDue ; i++){
    arrayDue.push(i);
}


//se il primo array è più corto del secondo
if(arrayUno.length<arrayDue.length){
    while(arrayUno.length!=arrayDue.length){
        arrayUno.push("aggiunto");
    }
}


//se il secondo array è più corto del primo
else if(arrayDue.length<arrayUno.length){
while(arrayDue.length!=arrayUno.length){
        arrayDue.push("agginto");
}
}

else{
    console.log("Gli array sono di uguale dimensione");
}



console.log(arrayUno);
console.log(arrayDue);