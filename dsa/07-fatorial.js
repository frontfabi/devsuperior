function fatorial(n) {
  if (n <= 0) return 1;
  return n * fatorial(n - 1);
}

console.log(fatorial(5)); // Output: 120
console.log(fatorial(0)); // Output: 1
console.log(fatorial(3)); // Output: 6
console.log(fatorial(7)); // Output: 5040
console.log(fatorial(20)); // Output: 1

// Com recuursão de cauda
function tailFactorial(n, acc = 1) {
  if (n == 0) return acc;
  return tailFactorial(n - 1, n * acc);

}
console.log(tailFactorial(5)); // Output: 120
console.log(tailFactorial(0)); // Output: 1
console.log(tailFactorial(3)); // Output: 6
console.log(tailFactorial(7)); // Output: 5040
console.log(tailFactorial(20)); // Output: 2432902008176640000