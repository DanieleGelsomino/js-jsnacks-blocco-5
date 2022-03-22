console.log("JS OK!");

/*
    consegna:
    Crea 10 oggetti che rappresentano una zucchina.
    Dividi in due array separati le zucchine che misurano meno o più di 15cm.
    Infine stampa separatamente quanto pesano i due gruppi di zucchine.
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
    lunghezza: 17,
  },
  {
    varietà: "siciliana",
    peso: 5,
    lunghezza: 16,
  },
  {
    varietà: "bianca triestina",
    peso: 5,
    lunghezza: 18,
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

function dividePlants(
  vegetablesFruits,
  shortVegetablesFruits,
  longVegetablesFruits
) {
  for (let i = 0; i < vegetablesFruits.length; i++) {
    if (vegetablesFruits[i].lunghezza < 15) {
      shortVegetablesFruits.push(vegetablesFruits[i]);
    } else {
      longVegetablesFruits.push(vegetablesFruits[i]);
    }
  }
}

const shortVegetablesFruits = [];
const longVegetablesFruits = [];

dividePlants(zucchine, shortVegetablesFruits, longVegetablesFruits);
console.table(shortVegetablesFruits);
console.table(longVegetablesFruits);

const zucchineCorte = sumPlants(shortVegetablesFruits);
console.log("le Zucchine corte pesano complessivamente", zucchineCorte);
const zucchineLunghe = sumPlants(longVegetablesFruits);
console.log("le Zucchine lunghe pesano complessivamente", zucchineLunghe);
