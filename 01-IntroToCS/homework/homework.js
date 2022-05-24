"use strict";

// Formula: Digito*2^indice
function BinarioADecimal(num) {
  // El param num es un str
  // tu codigo aca
  let enDecimal = 0;
  for (let i = 0; i < num.length; i++) {
    enDecimal = enDecimal + num[i] * 2 ** (num.length - 1 - i); // Tenemos que iterar de derecha a izquierda, con -i vamos restando con cara iteracion.
  }
  return enDecimal;
}

// Formula: D/2%
function DecimalABinario(num) {
  // tu codigo aca
  let almacenador = "";
  while (num > 0) {
    let resto = num % 2;
    almacenador = almacenador + resto.toString(); // lo convertimos en cadena de texto
    num = Math.floor(num / 2); // floor para quedarnos con el numero entero de la division. Siempre redondea para abajo.
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
console.log(BinarioADecimal("10011"));
