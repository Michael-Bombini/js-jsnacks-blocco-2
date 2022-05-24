/*
Snack3
Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari
*/


const array = [];
let errore = false;
const quantiNumeri = parseInt(prompt("Quanti numeri vuoi inserire?"));
let sommaIndexDispari = 0 ;
let arrayDispari = [];
if(isNaN(quantiNumeri)){
    alert("non hai inserito un numero valido")
    errore = true;
}

//Caricamento dell'array con controllo per forzare l'utente a inserire un numero
for(let i = 0 ; i < quantiNumeri && !errore; i++){
    const numero = parseInt(prompt(`Inserisci in posizione ${i}`));
    if(isNaN(numero))
        i--;
    else
        array.push(numero);

    
    if(i%2==1){
        sommaIndexDispari += numero;
        arrayDispari.push(numero);
    }
    

}

if(!errore){
alert(`La somma degli elementi con posizione dispari è ${sommaIndexDispari} ed è stata calcolata dalla somma 
di questi numeri ${arrayDispari} `);

}