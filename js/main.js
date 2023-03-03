



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
