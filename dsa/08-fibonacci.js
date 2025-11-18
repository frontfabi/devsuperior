function fibonacci(n) {
  if (n === 0 || n === 1) return n; 
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(12))
console.log(fibonacci(7))
// console.log(fibonacci(45))

function tailFib(n, a = 0, b = 1) {
  if (n == 0) return a;
  if (n == 1) return b;
  return tailFib(n - 1, b, a + b)
}

console.log(tailFib(80))