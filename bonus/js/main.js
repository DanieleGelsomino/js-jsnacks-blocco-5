console.log("JS OK!");

/*
    BONUS
    Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi)
    prendendo alternativamente gli elementi da uno e dall’altro,
    es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

function mixedArray() {
  const arrayNumbers = [1, 2, 3];
  const arrayLetters = ["a", "b", "c"];
  const arrayMix = [];

  for (let i = 0; i < 3; i++) {
    arrayMix.push(arrayNumbers[i]);
    arrayMix.push(arrayLetters[i]);
  }
  return arrayMix;
}

const arrayNumbersAndLetters = mixedArray();

console.log(arrayNumbersAndLetters);

/*
    BONUS 
    Scrivi una funzione che accetti tre argomenti: un array e due numeri 
    (“a” più piccolo di “b” e “b” grande al massimo
    quanto il numero di elementi dell’array).
    La funzione ritornerà un nuovo array
    con i valori che hanno la posizione compresa tra “a” e “b”
*/

function newArrayNumbers(arrayNum, minNumber, maxNumber) {
  const newArray = [];
  for (let i = minNumber; i < maxNumber; i++) {
    newArray.push(arrayNum[i]);
  }
  return newArray;
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];

const arrayNumbersNew = newArrayNumbers(numbersArray, 4, 8);
console.log(arrayNumbersNew);
