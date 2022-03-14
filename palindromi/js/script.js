console.log('JS OK!');

//Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// creo una funzione per far scrivere una parola all'utente
function userWriteWord(message) {
    
    const createWord = prompt(message);

    return createWord
}


const userWord = userWriteWord('Inserisci una parola');

console.log(userWord);