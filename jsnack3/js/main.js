console.log("JS OK!");

/*
    consegna:
    Scrivi una funzione che accetti una stringa come argomento
    e la ritorni girata (es. Ciao -> oaiC)
*/

function reverse(string) {
  return string.split("").reverse().join("");
}

const word = prompt("inserisci parola");

const reverseWord = reverse(word);
console.log(reverseWord);
