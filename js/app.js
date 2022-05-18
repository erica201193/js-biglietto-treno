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

const kilometri = prompt("Inserisci il numero di kilometri che desideri percorrere");

const eta = prompt("Inserisci la tua età");


/* Validazione dati inseriti */

const numKm = parseInt(kilometri);

const numEta = parseInt(eta);

if (isNaN(numKm)) {
    alert("Il numero di kilometri inseriti non è valido");
}

if (isNaN(numEta)) {
    alert("L'età inserita non è valida");
}

/* Stampa dati inseriti */

const spanNumEta = document.getElementById("etaUtente")

spanNumEta.innerHTML = (numEta);


const prezzofinale = numKm * 0.21;


if (numEta < 18) {
    document.getElementById("prezzoUtente").innerHTML = (prezzofinale - (prezzofinale * 20/100) );
} else {
    document.getElementById("prezzoUtente").innerHTML = (prezzofinale);
};


if (numEta > 65) {
    document.getElementById("prezzoUtente").innerHTML = (prezzofinale - (prezzofinale * 40/100) );
} else {
    document.getElementById("prezzoUtente").innerHTML = (prezzofinale);
};