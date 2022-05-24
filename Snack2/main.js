/*
Snack2
Generatore di “nomi cognomi” casuali: 
il Grande Gatsby ha  una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

const nomi = ["Mario", "Luigi", "Giovanni", "Giuseppe", "Pippo", "Pluto", "Gatsby"];
const cognomi = ["Rossi", "Verdi", "Gialli", "Conte", "Bianchi", "Gallo", "Verde"];
const generato = [];

const quantiGenerare = parseInt(prompt(`Il grande Gatsby ti chiede quanti Nomi e cognomi vuoi generare?`))


const lista = document.getElementById("lista");
const maxNomi = nomi.length - 1;
const maxCognomi = cognomi.length - 1;
if(isNaN(quantiGenerare) || quantiGenerare<=0){
    lista.innerHTML = "Questo non è un numero o è minore/uguale a 0!";
}
for (let i = 0; i < quantiGenerare; i++) {
    let indiceNome = Math.floor(Math.random() * maxNomi);
    let indiceCognome = Math.floor(Math.random() * maxCognomi)
    generato.push(nomi[indiceNome] + " " + cognomi[indiceCognome]);
    lista.innerHTML += `<li>${generato[i]}</li>`

}

