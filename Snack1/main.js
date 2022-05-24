/*
Snack1
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/

const numero = parseInt(prompt("Inserisci un numero"));
if(isNaN(numero)){
    alert("il numero che hai inserito non è valido");
}
else
if(numero%2 === 0 ){
    alert(`il numero è ${numero} ed è pari`);
}
else
    alert(`il numero è ${numero} ed è dispari
questo è il suo successivo ${numero+1}`);

