"use strict";

/*Using Statics for my babel example*/

/*------------------------Média Aritmética---------------------------*/
var media = function media() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  return (values.reduce(function (acum, num) {
    return num + acum;
  }, 0) / values.length).toFixed(3);
};
console.log("M\xE9dia = ".concat(media(1, Math.sqrt(2), 3, 4, 5, 6, 7, 8, 9, 99, 71, -5)));

/*------------------------Média Ponderada-----------------------------*/
var mediaPonderada = function mediaPonderada() {
  var sum = 0;
  var sumPeso = 0;
  for (var _len2 = arguments.length, ValueObj = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    ValueObj[_key2] = arguments[_key2];
  }
  ValueObj.forEach(function (value) {
    var _value$peso, _value$peso2;
    sum += value.valor * ((_value$peso = value.peso) !== null && _value$peso !== void 0 ? _value$peso : 1); /*Caso o valor considerado não tiver peso atribui o peso 1 a ele*/
    sumPeso += (_value$peso2 = value.peso) !== null && _value$peso2 !== void 0 ? _value$peso2 : 1;
  });
  return (sum / sumPeso).toFixed(3);
};
var obj1 = {
  valor: 8,
  peso: 5
};
var obj2 = {
  valor: 10,
  peso: 3
};
var obj3 = {
  valor: 9,
  peso: 2
};
var obj4 = {
  valor: 7
};
console.log("M\xE9dia Ponderada = ".concat(mediaPonderada(obj1, obj2, obj3, obj4)));

/*------------------------Mediana---------------------------*/
var mediana = function mediana() {
  for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    values[_key3] = arguments[_key3];
  }
  var orderedValues = [].concat(values).sort(function (a, b) {
    return a - b;
  }); /*Ordenar o array de forma Crescente */
  if (orderedValues.length % 2 === 0) {
    return (orderedValues[orderedValues.length / 2] + orderedValues[orderedValues.length / 2 - 1]) / 2;
  } else {
    return orderedValues[Math.floor(orderedValues.length / 2)];
  }
};
console.log("Mediana = ".concat(mediana(2, 3, 6, 5, 4, 1, 5, 9, 5)));

/*------------------------Moda---------------------------*/
var moda = function moda() {
  for (var _len4 = arguments.length, values = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    values[_key4] = arguments[_key4];
  }
  var qtd = values.map(function (num) {
    return [num, values.filter(function (n) {
      return n === num;
    }).length];
  });
  qtd.sort(function (a, b) {
    return b[1] - a[1];
  });
  return qtd[0][0];
};
console.log("Moda = ".concat(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));