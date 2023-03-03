/*/CHIEDERE ALL UTENTE SE SCELIERE TRA PARI O DISPARI
let pariDispari = prompt("scegli pari o dispari");
console.log(pariDispari);

//CHIEDERE ALL'UTENTE DI SCEGLIERE UN NUMERO TRA 1 E 5
let sceltaNumeroUtente = parseInt(prompt("scegli un numero tra 1 e 5"));
console.log(sceltaNumeroUtente);

//GENERIAMO UN NUMERO RANDOM DA 1 A 5 USANDO UNA FUNZIONE 
function generaNumeroRandom(min, max) {
    let numeroRandom = Math.floor(Math.random()* (max - min + 1)) + min; 
    return numeroRandom;
}
let numeroPc =  generaNumeroRandom(1, 5);
console.log(numeroPc);

//SOMMIAMO I DUE NUMERI 
let somma = sceltaNumeroUtente + numeroPc;

//STABILIAMO SE IL NUMERO è PARI O DISPARI TRAMITA UNA FUNZIONE 

function pari(numero){
    let numeroPari = (numero % 2 == 0);
    return numeroPari;
}


const risultato = pari(somma);


//DICHIARIAMO CHI HA VINTO
if (risultato == true){
    console.log("numero pari")
} else{
    console.log("numero dispari")
};
*/


//ESERCIZIO PAROLA PALINDROMA


// CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA

let parolaUtente = prompt("Inserisci una parola");
console.log(parolaUtente);

//CREIAMO UNA FUNZIONE PER CAPIRE SE LA PARTOLA è PALINDROMA 


function parolaPalindroma(parola){
 let i = 0
 let x = parolaUtente.length - 1; 
 while (i < x){
    if(parolaUtente[i] !== parola[x]){
        return false
    }
    i++;
    x--;
 }
    return true;
}

//VERIFICHIAMO SE LA PAROLA è PALINDROMA
if (parolaPalindroma(parolaUtente)){
    console.log(parolaUtente + " è palindorma");
} else{
    console.log(parolaUtente + " non è palindroma");
};
