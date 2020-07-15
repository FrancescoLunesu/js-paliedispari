// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// scrivo la parola palindroma da esaminare
var parola = prompt("Inserisci una parola palindroma:");
console.log(parola);
console.log(parola.length);
// dichiaro una variabile vuota
var parolaRev = "";

// eseguo un ciclo for che estrae la parola insarita partendo dall'ultima lettera alla prima e do il valore alla variabile vuota "parolaRev"
for (var i = parola.length -1; i >= 0; i--){
    parolaRev = parolaRev + parola[i];
    // console.log(parolaRev);
}

// console.log(parolaRev);

// con un IF impongo la condizione se parolaRev e parola sono uguali allora la stringa scelta è un palindromo
if(parolaRev == parola){
    console.log("La parola scelta è un palindromo!");
} else {
    console.log("ATTENZIONE: la parola scelta non è un palindromo!");
}
