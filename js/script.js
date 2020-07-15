// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//  ******** PRIMA PARTE ********

// faccio inserire all'utente la parola da esaminare
var parola = prompt("Inserisci una parola palindroma:");
// console.log(parola);
// console.log(parola.length);
// richiamo la funzione "verifica" che ho creato sotto
var check = verifica(parola);
console.log(check);

// dichiaro una variabile vuota
// var parolaRev = "";

// eseguo un ciclo for che estrae la parola insarita partendo dall'ultima lettera alla prima e do il valore alla variabile vuota "parolaRev"
// for (var i = parola.length -1; i >= 0; i--){
//     parolaRev = parolaRev + parola[i];
//     // console.log(parolaRev);
// }

// console.log(parolaRev);

// con un IF impongo la condizione se parolaRev e parola sono uguali allora la stringa scelta è un palindromo
// if(parolaRev == parola){
//     console.log("La parola scelta è un palindromo!");
// } else {
//     console.log("ATTENZIONE: la parola scelta non è un palindromo!");
// }


// ******** SECONDA PARTE (CREAZIONE FUNZIONE) ********

// Traduco ciclo FOR e l'IF in una funzione:

function verifica(stringa){
    // posso dichiarare "parolaRev" direttamente all'interno della funzione
    var parolaRev = "";
    // il ciclo FOR e l'IF li porto all'interno della funzione modificando "parola" con il nome dell'argomento (in questo caso "stringa)"
    for (var i = stringa.length -1; i >= 0; i--){
        parolaRev = parolaRev + stringa[i];
    }
    if(parolaRev == stringa){
        // con return indico cioè che la funzione deve restituire
        return document.getElementById('risultato').innerHTML ="La parola scelta è un palindromo";
    } else {
        // con return indico cioè che la funzione deve restituire
        return document.getElementById('risultato').innerHTML ="ATTENZIONE: la parola scelta non è un palindromo!";
    }
}
