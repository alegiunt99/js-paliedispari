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

const palindromeOrNot = checkPalindrome(userWord);

console.log(palindromeOrNot);

// ora devo creare una funzione che mi permetta di capire se la parola è palindroma

function checkPalindrome(string) {

    // calcolo la lunghezza di una stringa

    const stringLength = string.length;

    //creo un loop che divide a metà la stringa
    for (let i = 0; i < stringLength / 2; i++){

        //controllo se le due metà della stringa sono uguali
        if (string[i] !== string[stringLength - 1 - i]) { // se la prima metà e l'altra sono diversi

            return 'NON è un palindromo';
        }
    }
    // una volta usciti dal ciclo, ho la certezza di avere un polindromo
    
    return 'è un palindromo';
}