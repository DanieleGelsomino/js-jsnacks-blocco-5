console.log("JS OK!");

/*
    consegna:
    Crea un array di 10 oggetti che rappresentano una zucchina,
    indicando per ognuna varietà, peso e lunghezza.
    Calcola quanto pesano tutte le zucchine.
*/

const zucchine = [
  {
    varietà: "chiara",
    peso: 5,
    lunghezza: 15,
  },
  {
    varietà: "ortolano di Faenza",
    peso: 5,
    lunghezza: 14,
  },
  {
    varietà: "fiorentina",
    peso: 5,
    lunghezza: 12,
  },
  {
    varietà: "siciliana",
    peso: 5,
    lunghezza: 11,
  },
  {
    varietà: "bianca triestina",
    peso: 5,
    lunghezza: 10,
  },
  {
    varietà: "rigata pugliese",
    peso: 5,
    lunghezza: 9,
  },
  {
    varietà: "romanesca",
    peso: 5,
    lunghezza: 8,
  },
  {
    varietà: "tonda di Piacenza",
    peso: 5,
    lunghezza: 7,
  },
  {
    varietà: "trombetta",
    peso: 5,
    lunghezza: 6,
  },
  {
    varietà: "gialla",
    peso: 5,
    lunghezza: 5,
  },
];

function sumPlants(vegetableFruits) {
  let somma = 0;
  for (let i = 0; i < vegetableFruits.length; i++) {
    somma += vegetableFruits[i].peso;
  }
  return somma;
}

const sommaTotaleZucchine = sumPlants(zucchine);
console.log(sommaTotaleZucchine);
