"use strict";

// Formula: Digito*2^indice
function BinarioADecimal(num) {
  // El param num es un str
  // tu codigo aca
  let enDecimal = 0;
  for (let i = 0; i < num.length; i++) {
    enDecimal = enDecimal + num[i] * 2 ** (num.length - 1 - i); // - i para que itere de derecha a izquierda
  }
  return enDecimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  let almacenador = "";
  while (num !== 0) {
    let residuo = num % 2;
    num = Math.floor(num / 2); // floor para quedarnos con el numero entero.

    almacenador = almacenador + residuo.toString(); // lo convertimos en cadena de texto
    console.log(`El Div es: ${num} y el Residuo:${residuo}`);
  }

  // split() separará cada carácter de una cadena y lo convertirá en un array.
  // reverse() tomará esa matriz e invertirá los elementos dentro de ella.
  // join() unirá los caracteres que han sido invertidos por la función reverse().
  let ordenado = almacenador.split("").reverse().join("");
  return ordenado;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};

console.log(DecimalABinario(19));
console.log(BinarioADecimal(10011));
