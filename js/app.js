/*
esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo: js-biglietto-treno
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Formula per il calcolo: km * 0.21 = prezzoBiglietto
Stampare in HTML una lista con eta inserità, km inseriti ed il prezzo finale
eta: 50
km: 120
prezzzo: 24,50

BONUS:
validare/ controllare i dati inseriti
età è un numero?
età è stata inserita
km è un numero valido?
posso inserire un minimo / massimo di km possibili?
*/



/* Richiesta dati */

let kilometri = prompt("Inserisci il numero di kilometri che desideri percorrere");

let eta = prompt("Inserisci la tua età");


/* Validazione dati inseriti */

let numKm = parseInt(kilometri);

let numEta = parseInt(eta);


if (isNaN(numKm)) {
    alert("Il numero di kilometri inseriti non è valido");
}

if (isNaN(numEta)) {
    alert("L'età inserita non è valida");
}

/* Stampa dati inseriti */

document.getElementById("etaUtente").innerHTML = (numEta) + " "+ "anni"

document.getElementById("kmUtente").innerHTML = (numKm) + " "+ "kilometri"


/* Prezzo */

let prezzoalkm = numKm * 0.21;
document.getElementById("prezzoUtente").innerHTML = (prezzoalkm.toFixed(2))

let prezzo

if (numEta < 18) {
    prezzo = (prezzoalkm - (prezzoalkm * 20/100) )
    let printPrezzo = document.getElementById ("prezzoUtente")
    printPrezzo.innerHTML = (prezzo.toFixed(2))
} 
else if (numEta > 65) {
    prezzo = (prezzoalkm - (prezzoalkm * 40/100) )
    let printPrezzo = document.getElementById ("prezzoUtente")
    printPrezzo.innerHTML = (prezzo.toFixed(2))
}
else prezzo = prezzoalkm
let printPrezzo = document.getElementById ("prezzoUtente")
printPrezzo.innerHTML = (prezzo.toFixed(2))
