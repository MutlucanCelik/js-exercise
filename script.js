//asal sayı bulan algoritma
const findPrime = function (...numbers) {
  let isPrime = true;
  numbers.map((number) => {
    if (number !== 0 && number !== 1) {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrime = false;
        }
      }
      if (isPrime) {
        console.log(`${number} asaldır.`);
      }
      isPrime = true;
    }
  });
};

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

findPrime(...numbers);

console.log(
  "---------------------------------------------------------------------------------"
);

/*
Arkadaş sayı algoritması
İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.
Örnek: 220 ve 284 için 
220: 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284 
284: 1 + 2 + 4 + 71 + 142 = 220
*/

const findFriendNumbers = function (number1, number2) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 1; i < number1; i++) {
    if (number1 % i === 0) {
      sum1 += i;
    }
  }

  for (let i = 1; i < number2; i++) {
    if (number2 % i === 0) {
      sum2 += i;
    }
  }

  if (sum1 === number2 && sum2 === number1) {
    console.log(`${number1} ve ${number2} arkadaş sayılardır.`);
  } else {
    console.log(`${number1} ve ${number2} arkadaş sayı değildir.`);
  }
};

findFriendNumbers(284, 220);

console.log(
  "---------------------------------------------------------------------------------"
);

//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

for (let i = 2; i < 1000; i++) {
  findPrime(i);
}

console.log(
  "---------------------------------------------------------------------------------"
);

/*
1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
Mükemmel sayı : Kendisi hariç pozitif tam bölenlerinin toplamı kendisine eşit olan sayıdır.
*/
const perfectNumber = function (number) {
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  if (number === sum) {
    console.log(`${number} mükemmel sayıdır.`);
  }
};

for (let i = 1; i < 10000; i++) {
  perfectNumber(i);
}
