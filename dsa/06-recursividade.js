function recurs(n) {
  console.log(n);
  if (n > 0) {
    // Condição de parada. Importante para não haver estouro de memória. Sem ela, a função executaria para sempre.
    recurs(n - 1);
  }
}

// recurs(5)

function somaNatural(n) {
  if (n <= 0) return 0;
  return n + somaNatural(n - 1);
}

console.log(somaNatural(3)); // 15
console.log(somaNatural(2)); // 3
console.log(somaNatural(-10));
