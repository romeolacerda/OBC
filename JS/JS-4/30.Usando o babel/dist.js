"use strict";

// media aritimetrica simples
var ariSimples = function ariSimples() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  return numbers.reduce(function (accum, num) {
    return accum + num;
  }, 0) / numbers.length;
};
console.log("M\xE9dia aritimetrica simples ".concat(ariSimples(1, 2, 3)));

//media aritimetrica ponderada
var ariPonderada = function ariPonderada() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  // pegando da entrada entries 2 argumentos, numero e peso
  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0); // operador de coalescencia se weight for igual a undefined ent wiight = 1
  var weightSum = entries.reduce(function (accum, entry) {
    var _entry$weight;
    return accum + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return sum / weightSum;
};
console.log("M\xE9dia ponderada: ".concat(ariPonderada({
  number: 9,
  weight: 3
}, {
  number: 7
}, {
  number: 10,
  weight: 1
})));

//Mediana
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  }); // organiza os items do array em ordem decresente
  var middle = Math.floor(orderedNumbers.length / 2); // essa variavel, no caso dos numeros pares, pega o segundo numero do meio
  if (orderedNumbers.length % 2 !== 0) {
    // se o resto da divisão for diferente de zero significa que o numero é impar
    return orderedNumbers[middle];
  }
  var firstMedian = orderedNumbers[middle - 1]; // por isso essa variavel, para pegar o primeiro numero do meio
  var secondMedian = orderedNumbers[middle];
  return ariSimples(firstMedian, secondMedian);
};
console.log("Mediana: ".concat(median(2, 5, 99, 4, 42, 7)));
console.log("Mediana: ".concat(median(15, 14, 8, 7, 3)));

//moda
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  var quantities = numbers.map(function (num) {
    return [num,
    //cara que maneira fantastica pra resolver, ele usou o map pra criar um array 
    numbers.filter(function (n) {
      return num === n;
    }).length // com os elementos repetidos e pediu o tamanho desse array, tendo a quantidades de vezes que cada elemento se repetiu
    ];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("Moda: ".concat(mode(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));
