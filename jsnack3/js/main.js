console.log("JS OK!");

/*
    consegna:
    Scrivi una funzione che accetti una stringa come argomento
    e la ritorni girata (es. Ciao -> oaiC)
*/

function reverse(string) {
  return string.split("").reverse().join("");
}

console.log(reverse("boolean"));
