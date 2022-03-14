console.log('JS OK!');

/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

// chiamo la funzione per far scegliere all'utente pari o dispari

const userEvenOrOdd = oddOrEvenChoice('Pari o dispari?');

// creo una funzione per far scegliere all'utente tra pari o dispari

function oddOrEvenChoice(message) {

    const oddOrEven = prompt(message);

    return oddOrEven
}

console.log(userEvenOrOdd);


// se il valore che ha scritto l'utente è 'pari'

if (userEvenOrOdd.value === 'Pari') {

    if (sommaNumeri % 2 === 0) {
        console.log("Ha vinto l'user!")
    } else if (sommaNumeri % 2 === 1) {
        console.log("Ha vinto il computer")
    }

}



if (userEvenOrOdd.value === 'Dispari') {
    
    if (sommaNumeri % 2 === 1) {
        console.log("Ha vinto l'user!")
    } else if (sommaNumeri % 2 === 0) {
        console.log("Ha vinto il computer")
    }
}


// chiamo la funzione per far scrivere all'utente un numero da 1 a 5

const userNumber = chooseANumber('scrivi un numero da 1 a 5');

// creo una funzione per far scrivere all'utente un numero da 1 a 5

function chooseANumber(oneToFive) {
    
    // chiedo un numero all'utente
    const number = parseInt(prompt(oneToFive));


    // controllo che sia un numero
    if (!isNaN(number)) { // se è un numero

        // controllo che sia minore o uguale a 5
        if (number <= 5) {

            console.log("il numero dell'utente è", number)
            // svolgi la funzione 
            return number
        }

    } else {
                
        console.log('NON è un numero');
    }
}





// chiamo la funzione per i 5 numeri random al Computer

const randomNumbersCPU = fiveRandomNumbers(5);

//creo una funzione per generare 5 numeri random

function fiveRandomNumbers(max) {

    const randomNumbersGen = Math.floor(Math.random() * 5) + 1;

     // controllo che sia un numero
     if (!isNaN(randomNumbersGen)) { // se è un numero

        // controllo che sia minore o uguale a 5
        if (randomNumbersGen <= 5) {

            // svolgi la funzione 
            return randomNumbersGen
        }

    } else {
                
        console.log('NON è un numero');
    }

} 
console.log('il numero del computer è', randomNumbersCPU)


// sommo i 2 numeri

const sommaNumeri = addictionNumbers(randomNumbersCPU, userNumber);

function addictionNumbers(numero1, numero2) {

    const somma = numero1 + numero2;

    return somma;

}

console.log('la somma dei 2 numeri è:', sommaNumeri)

// controllo se la somma è pari o dispari

const sommaPoD = numberOddOrEven(sommaNumeri);

function numberOddOrEven(operazione) {

    if (operazione % 2 === 0) {

        console.log('la somma è pari');

        return 'Pari';
    } 
    
    else (operazione % 2 === 1); {

        console.log('la somma è dispari')

        return 'Dispari';
    }
}


